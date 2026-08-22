const { test, expect } = require('@playwright/test');

async function resetWp17(page, hash = 'screen-b-1') {
  await page.goto(`/index.html#${hash}`);
  await page.evaluate(() => {
    prototypeState.studio.savedLooks = [];
    prototypeState.planner = { items: [] };
    const state = prototypeState.vNext.wp17;
    Object.assign(state, {
      savedFilter: 'All', selectedSavedId: 'saved-dinner', selectedDay: 'Tue',
      selectedPlanId: 'plan-dinner', draft: null, removedSavedIds: [],
      removedPlanIds: [], plans: [], seededHidden: false,
      trip: { destination: 'London', start: '2026-10-16', end: '2026-10-20', occasions: ['Work Meetings', 'Sightseeing'], added: false }
    });
    renderWp17();
  });
}

test.describe('WP-17 outfit-centric Saved Looks and Planner', () => {
  test('Saved Looks is a filterable visual outfit library with a visual empty state', async ({ page }) => {
    await resetWp17(page);
    const library = page.locator('#screen-b-1');
    await expect(library.locator('.wp17-look-card')).toHaveCount(4);
    await library.getByRole('button', { name: 'Work', exact: true }).click();
    await expect(library.locator('.wp17-look-card')).toHaveCount(1);
    await library.getByRole('button', { name: 'Evening', exact: true }).click();
    await expect(library.getByRole('button', { name: 'Open saved Dinner outfit' })).toBeVisible();
    await page.evaluate(() => { prototypeState.vNext.wp17.seededHidden = true; renderWp17(); });
    await expect(library.locator('.wp17-empty-collage img')).toHaveCount(3);
    await expect(library.getByRole('link', { name: 'Discover Looks' })).toBeVisible();
  });

  test('shared saves deduplicate by stable outfit identity', async ({ page }) => {
    await resetWp17(page);
    await page.evaluate(() => {
      const look = { id: 'shared-work', name: 'Work', image: 'images/outfit_soft_tailoring.png', createdIn: 'Studio', items: ['Blazer', 'Top', 'Trouser', 'Shoes'] };
      prototypeState.studio.savedLooks.push(look, { ...look });
      renderWp17();
    });
    await expect(page.locator('#screen-b-1 [data-saved-id="shared-work"]')).toHaveCount(1);
  });

  test('saved look detail leads with outfit imagery, pieces and actions', async ({ page }) => {
    await resetWp17(page);
    await page.locator('#screen-b-1').getByRole('button', { name: 'Open saved Dinner outfit' }).click();
    const detail = page.locator('#screen-b-2');
    await expect(detail.locator('.wp17-hero > img')).toBeVisible();
    await expect(detail.locator('.si-pieces-strip').first().locator('img')).toHaveCount(3);
    await expect(detail.getByRole('button', { name: 'Wear', exact: true })).toBeVisible();
    await expect(detail.getByRole('button', { name: 'Add to Planner' })).toBeVisible();
    await expect(detail).not.toContainText('Why Saved');
  });

  test('wearing a saved outfit uses the shared daily outfit state', async ({ page }) => {
    await resetWp17(page);
    await page.evaluate(() => wp17OpenSaved('saved-dinner'));
    await page.locator('#screen-b-2').getByRole('button', { name: 'Wear', exact: true }).click();
    await expect(page).toHaveURL(/#screen-a-7$/);
    const selection = await page.evaluate(() => prototypeState.dailyOutfitSelection);
    expect(selection).toMatchObject({ id: 'saved-dinner', occasion: 'Dinner', source: 'Saved Looks' });
  });

  test('a saved outfit stays preselected through Add to Planner', async ({ page }) => {
    await resetWp17(page);
    await page.evaluate(() => wp17OpenSaved('saved-dinner'));
    const sourceImage = await page.locator('#screen-b-2 .wp17-hero > img').getAttribute('src');
    await page.locator('#screen-b-2').getByRole('button', { name: 'Add to Planner' }).click();
    const editor = page.locator('#screen-d-2');
    await expect(editor.getByText('Selected saved outfit')).toBeVisible();
    await expect(editor.getByRole('option')).toHaveCount(1);
    await editor.getByRole('button', { name: 'Add to Planner' }).click();
    await expect(page).toHaveURL(/#screen-d-1$/);
    await page.locator('#screen-d-1').getByRole('button', { name: 'Open planned Dinner outfit' }).last().click();
    await expect(page.locator('#screen-d-3 .wp17-hero > img')).toHaveAttribute('src', sourceImage);
    expect(await page.evaluate(() => prototypeState.vNext.wp17.plans[0].outfitId)).toBe('saved-dinner');
  });

  test('removing a save leaves its existing Planner occurrence coherent', async ({ page }) => {
    await resetWp17(page);
    await page.evaluate(() => wp17OpenSaved('saved-dinner'));
    await page.locator('#screen-b-2').getByRole('button', { name: 'Remove Save' }).click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Remove Save' }).click();
    await expect(page).toHaveURL(/#screen-b-1$/);
    await expect(page.locator('#screen-b-1').getByRole('button', { name: 'Open saved Dinner outfit' })).toHaveCount(0);
    await page.evaluate(() => wp17OpenPlan('plan-dinner'));
    await expect(page.locator('#screen-d-3 .wp17-hero > img')).toHaveAttribute('src', 'images/outfit_dinner_classic.png');
  });

  test('Planner day selection reveals a visual empty slot and planning action', async ({ page }) => {
    await resetWp17(page, 'screen-d-1');
    const planner = page.locator('#screen-d-1');
    await planner.getByRole('button', { name: 'Wed October 15' }).click();
    await expect(planner.locator('.wp17-empty-slot img')).toBeVisible();
    await planner.getByRole('button', { name: 'Plan a Look' }).click();
    await expect(page).toHaveURL(/#screen-d-2$/);
  });

  test('Plan a Look offers multiple visual outfits and creates one occurrence', async ({ page }) => {
    await resetWp17(page, 'screen-d-1');
    await page.locator('#screen-d-1').getByRole('button', { name: 'Plan a new look' }).click();
    const editor = page.locator('#screen-d-2');
    await expect(editor.getByRole('option')).toHaveCount(4);
    await editor.getByRole('option', { name: /Weekend/ }).click();
    await editor.getByRole('button', { name: 'Plan This Look' }).click();
    await expect(page).toHaveURL(/#screen-d-3$/);
    await expect(page.locator('#screen-d-3')).toContainText('Office');
    expect(await page.evaluate(() => prototypeState.vNext.wp17.plans.length)).toBe(1);
  });

  test('changing a planned look preserves date and replaces only the outfit', async ({ page }) => {
    await resetWp17(page, 'screen-d-3');
    await page.evaluate(() => wp17OpenPlan('plan-dinner'));
    await page.locator('#screen-d-3').getByRole('button', { name: 'Change Look' }).click();
    await expect(page.locator('#wp17-plan-date')).toHaveValue('2026-10-14');
    await page.locator('#screen-d-2').getByRole('option', { name: /Work/ }).first().click();
    await page.locator('#screen-d-2').getByRole('button', { name: 'Plan This Look' }).click();
    const result = await page.evaluate(() => ({ plan: prototypeState.vNext.wp17.plans[0], removed: prototypeState.vNext.wp17.removedPlanIds }));
    expect(result.plan.date).toBe('2026-10-14');
    expect(result.removed).toContain('plan-dinner');
  });

  test('removing a Planner occurrence does not remove the Saved Look', async ({ page }) => {
    await resetWp17(page, 'screen-d-3');
    await page.evaluate(() => wp17OpenPlan('plan-dinner'));
    await page.locator('#screen-d-3').getByRole('button', { name: 'Remove Plan' }).click();
    await page.getByRole('alertdialog').getByRole('button', { name: 'Remove Plan' }).click();
    await expect(page).toHaveURL(/#screen-d-1$/);
    await page.goto('/index.html#screen-b-1');
    await expect(page.locator('#screen-b-1').getByRole('button', { name: 'Open saved Dinner outfit' })).toBeVisible();
  });

  test('travel setup builds daily outfits, ownership states and a deduplicated schedule', async ({ page }) => {
    await resetWp17(page, 'screen-d-4');
    const setup = page.locator('#screen-d-4');
    await expect(setup.locator('.wp17-trip-collage img')).toHaveCount(4);
    await setup.getByRole('button', { name: 'Dinners' }).click();
    await setup.getByRole('link', { name: 'Build Packing Plan' }).click();
    const travel = page.locator('#screen-d-5');
    await expect(travel.locator('.wp17-travel-day')).toHaveCount(5);
    await expect(travel.locator('.wp17-pack-item')).toHaveCount(7);
    await expect(travel.getByText('Missing', { exact: true })).toBeVisible();
    await travel.getByRole('button', { name: 'Add to Planner' }).click();
    await travel.getByRole('button', { name: 'Add to Planner' }).click();
    expect(await page.evaluate(() => prototypeState.vNext.wp17.plans.filter(plan => plan.id.startsWith('travel-london-')).length)).toBe(5);
    await travel.getByRole('link', { name: 'Edit Packing List' }).click();
    await expect(page.locator('#wp17-trip-destination')).toHaveValue('London');
  });
});

const planningOrigins = [
  ['Today', 'screen-a-6', 'a', 'Plan', 'screen-d-2'],
  ['Closet', 'screen-c-5', 'button', 'Plan', 'screen-d-2'],
  ['Studio', 'screen-h-5', 'button', 'Add to Planner', 'screen-d-1'],
  ['Creator', 'screen-h-13', 'button', 'Add to Planner', 'screen-d-2'],
  ['Discover', 'screen-g-10', 'button', 'Plan', 'screen-d-2']
];

for (const [origin, screen, role, label, destination] of planningOrigins) {
  test(`${origin} hands the selected outfit to the visual Planner`, async ({ page }) => {
    await resetWp17(page, screen);
    const host = page.locator(`#${screen}`);
    const control = role === 'a' ? host.getByRole('link', { name: label, exact: true }) : host.getByRole('button', { name: label, exact: true });
    await control.click();
    await expect(page).toHaveURL(new RegExp(`#${destination}$`));
    const preservedOrigin = await page.evaluate((source) => source === 'Studio'
      ? prototypeState.vNext.wp17.plans.at(-1)?.source
      : prototypeState.vNext.wp17.draft?.origin, origin);
    expect(preservedOrigin).toBe(origin);
    await expect(page.locator(`#${destination} img`).first()).toBeVisible();
  });
}
