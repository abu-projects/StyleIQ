const { test, expect } = require('@playwright/test');

test('planner cards preserve Dinner and Travel context in D-3', async ({ page }) => {
  await page.goto('/index.html#screen-d-1');
  await page.getByText('Dinner with Sarah', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-d-3$/);
  await expect(page.locator('#screen-d-3')).toContainText('Dinner with Sarah');
  await expect(page.locator('#screen-d-3')).toContainText('Ivory silk blouse');

  await page.goto('/index.html#screen-d-1');
  await page.locator('#screen-d-1 button[onclick="setWp09PlannerDay(\'Thu\')"]').click();
  await page.getByText('Travel commute', { exact: true }).click();
  await expect(page.locator('#screen-d-3')).toContainText('Travel commute');
  await expect(page.locator('#screen-d-3')).toContainText('Comfortable base');
  await expect(page.locator('#screen-d-3')).not.toContainText('Office');
});

for (const [occasion, expectedPiece] of [['Dinner', 'Silk blouse'], ['Travel', 'Comfortable base']]) {
  test(`D-2 ${occasion} selection remains ${occasion} in D-3`, async ({ page }) => {
    await page.goto('/index.html#screen-d-2');
    const screen = page.locator('#screen-d-2');
    await screen.getByRole('button', { name: occasion, exact: true }).click();
    await screen.getByText('Create My Look', { exact: true }).click();
    await expect(page).toHaveURL(/#screen-d-3$/);
    await expect(page.locator('#screen-d-3 h3')).toHaveText(occasion);
    await expect(page.locator('#screen-d-3')).toContainText(expectedPiece);
  });
}

for (const [budget, expected] of [['150', '$64 above your current wardrobe plan'], ['300', 'Planned budget remaining · $86']]) {
  test(`budget ${budget} is shared by E-1, E-2, and E-3`, async ({ page }) => {
    await page.goto('/index.html#screen-e-3');
    await page.locator('#wp09-budget-monthly').fill(budget);
    await page.locator('#screen-e-3').getByRole('button', { name: 'Save', exact: true }).click();
    await expect(page.locator('#screen-e-2')).toContainText(`$${budget}`);
    await expect(page.locator('#screen-e-2')).toContainText(expected);
    await page.goto('/index.html#screen-e-1');
    await expect(page.locator('#screen-e-1')).toContainText(`Planned Wardrobe Budget · $${budget}`);
    await page.goto('/index.html#screen-e-3');
    await expect(page.locator('#wp09-budget-monthly')).toHaveValue(budget);
  });
}

test('H-5 creates a real Planner plan that reopens with Studio context', async ({ page }) => {
  await page.goto('/index.html#screen-h-5');
  await page.evaluate(() => {
    activateRealStudioFinal(true);
    realStudioFinal.setup.occasion = 'Dinner';
    realStudioFinal.canvasItems = studioReviewCloset.slice(0, 3).map(item => ({ ...item, isRealClosetItem: true }));
    renderStudioReview();
    addStudioLookToPlannerFinal();
  });
  await expect(page).toHaveURL(/#screen-d-1$/);
  await page.locator('#screen-d-1').getByText('Dinner', { exact: true }).click();
  await expect(page.locator('#screen-d-3')).toContainText('Created in Style Studio for dinner.');
  await expect(page.locator('#screen-d-3')).toContainText('Camel Blazer');
});

for (const mode of ['photo', 'no-photo', 'none']) {
  test(`H-4 supports ${mode} Twin mode without a second Canvas`, async ({ page }) => {
    await page.goto('/index.html#screen-h-4');
    await page.evaluate(selectedMode => {
      prototypeState.vNext.styleTwinMode = selectedMode;
      prototypeState.styleTwinStatus = selectedMode === 'none' ? 'Skipped' : 'Complete';
      activeStudioFinal().displayMode = selectedMode === 'none' ? 'flat' : 'twin';
      renderStudioCanvas();
    }, mode);
    await expect(page.locator('#screen-h-4')).toBeVisible();
    if (mode === 'photo') await expect(page.locator('.simple-twin-image')).toBeVisible();
    if (mode === 'no-photo') await expect(page.locator('.neutral-twin-figure')).toBeVisible();
    if (mode === 'none') {
      await expect(page.locator('.simple-flat-lay')).toBeVisible();
      await expect(page.getByRole('button', { name: 'On My Twin' })).toBeDisabled();
    }
  });
}

test('Creator terminology and recreation converge on the protected H-4 Canvas', async ({ page }) => {
  await page.goto('/index.html#screen-h-13');
  await expect(page.getByRole('button', { name: 'Save Inspiration', exact: true })).toHaveCount(1);
  await expect(page.locator('#screen-h-13')).toContainText('Style Patterns & Recipes');
  await page.locator('#screen-h-13').getByText('Recreate With My Closet', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-14$/);
  await expect(page.locator('#screen-h-14 .topbar .pill')).toContainText('Role coverage');
  await page.getByRole('button', { name: 'Build This Version' }).click();
  await expect(page).toHaveURL(/#screen-h-4$/);
  await expect(page.locator('#screen-h-4 h3')).toHaveText('Dress My Twin');

  await page.goto('/index.html#screen-h-15');
  await expect(page.locator('#screen-h-15 h3')).toHaveText('Style Patterns & Recipes');
  await page.getByRole('button', { name: 'Try With My Closet' }).click();
  await expect(page).toHaveURL(/#screen-h-4$/);
});

test('Studio review saves into the canonical Saved Looks ecosystem', async ({ page }) => {
  await page.goto('/index.html#screen-h-5');
  await page.evaluate(() => {
    activateRealStudioFinal(true);
    realStudioFinal.setup.occasion = 'Work';
    realStudioFinal.canvasItems = studioReviewCloset.slice(0, 3).map(item => ({ ...item, isRealClosetItem: true }));
    renderStudioReview();
  });
  await page.locator('#screen-h-5').getByRole('button', { name: 'Save Look', exact: true }).click();
  await page.goto('/index.html#screen-b-1');
  await expect(page.locator('#screen-b-1')).toContainText('Created in Style Studio');
  await expect(page.locator('#screen-b-1')).toContainText('Work');
});

test('Studio variants return to the one H-5 review', async ({ page }) => {
  await page.goto('/index.html#screen-h-5');
  await page.locator('#screen-h-5').getByText('Create Variants', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-6$/);
  await page.locator('#screen-h-6').getByRole('button', { name: 'Preview' }).first().click();
  await expect(page).toHaveURL(/#screen-h-7$/);
  await page.locator('#screen-h-7').getByRole('button', { name: 'Use This Variant' }).click();
  await expect(page).toHaveURL(/#screen-h-5$/);
});

test('Studio board save routes to the canonical F-10 Style Boards', async ({ page }) => {
  await page.goto('/index.html#screen-h-8');
  await page.evaluate(() => {
    activateRealStudioFinal(true);
    realStudioFinal.setup.occasion = 'Work';
    realStudioFinal.canvasItems = studioReviewCloset.slice(0, 3).map(item => ({ ...item, isRealClosetItem: true }));
    renderStudioReview();
  });
  await page.locator('#screen-h-8').getByRole('button', { name: 'Save to Board', exact: true }).click();
  const openBoards = page.locator('#studio-open-board');
  await expect(openBoards).toBeVisible();
  await openBoards.click();
  await expect(page).toHaveURL(/#screen-f-10$/);
});

test('Creator discovery, roles, boards, Style Pack, and impact remain connected', async ({ page }) => {
  await page.goto('/index.html#screen-h-9');
  await page.locator('#screen-h-9').getByRole('button', { name: 'Open Maya Chen profile' }).click();
  await expect(page).toHaveURL(/#screen-h-10$/);
  await page.locator('#screen-h-10').getByText('Creator Closet', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-11$/);
  await expect(page.locator('#screen-h-11')).not.toContainText('Add to Cart');

  await page.goto('/index.html#screen-h-12');
  await page.locator('#screen-h-12').getByText('Soft Tailoring', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-13$/);
  await page.goto('/index.html#screen-h-16');
  await page.locator('#style-pack-button').click();
  await expect(page.locator('#style-pack-button')).toHaveText('Style Pack Saved');
  await page.getByText('Preview in My Closet', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-14$/);

  await page.goto('/index.html#screen-h-17');
  await expect(page.locator('#screen-h-17')).toContainText('Average Closet role coverage');
  await expect(page.locator('#screen-h-17')).toContainText('not ecommerce revenue');
});
