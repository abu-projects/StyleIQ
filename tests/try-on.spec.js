const { test, expect } = require('@playwright/test');

async function openToday(page, completed = true) {
  await page.goto('/1.html#D-02');
  if (completed) {
    await page.evaluate(() => localStorage.setItem('styleiqTwinSetupV2', JSON.stringify({
      method: 'photo', step: 4, complete: true, id: 'existing-twin'
    })));
    await page.reload();
  }
}
const tryOn = page => page.locator('.today-actions').getByRole('button', { name: 'Try On', exact: true });
const route = (page, id) => expect(page.locator('#app')).toHaveAttribute('data-screen', id);

for (const method of ['Use my photos', 'Create without personal photos']) {
  test(`unfinished Twin resumes selected Look after ${method} setup and reload`, async ({ page }) => {
    await openToday(page, false);
    await page.locator('.today-look-card').filter({ hasText: 'Asymmetric Black Dress' }).click();
    await tryOn(page).click();
    await route(page, 'H-01');
    await page.getByRole('button', { name: method }).click();
    await page.getByRole('button', { name: 'Use this reference' }).click();
    await page.reload();
    await page.getByRole('button', { name: 'Create first preview' }).click();
    await route(page, 'E-06');
    await expect(page.locator('.tryon-copy h2')).toHaveText('Asymmetric Black Dress');
    await page.goBack();
    await route(page, 'D-02');
    await expect(page.locator('.today-hero h3')).toHaveText('Asymmetric Black Dress');
  });
}

test('existing Twin switches Looks without setup and returns to the selected Today context', async ({ page }) => {
  await openToday(page);
  const before = await page.evaluate(() => localStorage.getItem('styleiqTwinSetupV2'));
  await tryOn(page).click();
  await route(page, 'E-06');
  await expect(page.locator('.tryon-copy h2')).toHaveText('Coffee Meeting');
  const coffee = await page.locator('.tryon-frame').getAttribute('style');
  await page.getByRole('button', { name: 'Try another Look' }).click();
  await page.locator('.today-look-card').filter({ hasText: 'Soft Tailoring' }).click();
  await tryOn(page).click();
  await route(page, 'E-06');
  await expect(page.locator('.tryon-copy h2')).toHaveText('Soft Tailoring');
  expect(await page.locator('.tryon-frame').getAttribute('style')).not.toEqual(coffee);
  expect(await page.evaluate(() => localStorage.getItem('styleiqTwinSetupV2'))).toEqual(before);
  await page.reload();
  await page.getByRole('button', { name: 'Back to selected Look' }).click();
  await expect(page.locator('.today-hero h3')).toHaveText('Soft Tailoring');
});

test('side arrows, drag and keyboard inspect the same full-body Look', async ({ page }) => {
  await openToday(page);
  await tryOn(page).click();
  const frame = page.locator('.tryon-frame');
  const first = await frame.getAttribute('style');
  await page.getByRole('button', { name: 'Next view', exact: true }).click();
  await page.getByRole('button', { name: 'Next view', exact: true }).click();
  await expect(frame).toHaveAttribute('aria-label', /Coffee Meeting.*Side view/);
  expect(await frame.getAttribute('style')).not.toEqual(first);
  await page.locator('.tryon-stage').focus();
  await page.keyboard.press('ArrowRight');
  await expect(frame).toHaveAttribute('aria-label', /Back view/);
  const bounds = await page.locator('.tryon-stage').boundingBox();
  await page.mouse.move(bounds.x + bounds.width * .75, bounds.y + 80);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width * .25, bounds.y + 80);
  await page.mouse.up();
  await expect(frame).toHaveAttribute('aria-label', /Front view/);
  await route(page, 'E-06');
  // A flex-shrinking stage previously cropped off the shoes.
  const dimensions = await frame.evaluate(el => ({ frame: el.clientHeight, stage: el.parentElement.clientHeight }));
  expect(dimensions.stage).toBeGreaterThanOrEqual(dimensions.frame);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('Make it mine passes the current formula and Closet matches to Studio', async ({ page }) => {
  await openToday(page);
  await tryOn(page).click();
  await page.getByRole('button', { name: 'Make it mine', exact: true }).click();
  await route(page, 'F-01');
  await expect(page.locator('.tryon-studio-formula')).toContainText('Coffee Meeting');
  await expect(page.locator('.tryon-studio-formula')).toContainText('4 of 4 roles matched');
  await page.reload();
  await expect(page.locator('.tryon-studio-formula')).toContainText('Black tailored blazer');
  const state = await page.evaluate(() => ({
    twin: JSON.parse(localStorage.getItem('styleiqTwinSetupV2')),
    canvas: JSON.parse(localStorage.getItem('styleiqAltaCanvasV2'))
  }));
  expect(state.twin.id).toBe('existing-twin');
  expect(state.canvas.items.map(x => x.name)).toEqual(['Black tailored blazer', 'Ivory silk shell', 'Black straight trousers', 'Tan suede loafers']);
});

test('abandoned Try On does not hijack Profile Twin completion', async ({ page }) => {
  await openToday(page, false);
  await tryOn(page).click();
  await page.getByRole('button', { name: 'Skip for now' }).click();
  await route(page, 'L-01');
  await page.locator('.profile-utility').filter({ hasText: 'Style Twin' }).click();
  await page.getByRole('button', { name: 'Create without personal photos' }).click();
  await page.getByRole('button', { name: 'Use this reference' }).click();
  await page.getByRole('button', { name: 'Create first preview' }).click();
  await route(page, 'H-10');
  await expect(page.getByText('Your Style Twin is ready.')).toBeVisible();
});

test('E-06 is unique and direct entry shares the Today result and angle state', async ({ page }) => {
  await openToday(page);
  await page.locator('.today-look-card').filter({ hasText: 'Asymmetric Black Dress' }).click();
  await tryOn(page).click();
  await page.getByRole('button', { name: 'Previous view', exact: true }).click();
  await expect(page.locator('.tryon-frame')).toHaveAttribute('aria-label', /Back view/);
  const view = await page.locator('.tryon-frame').evaluate(el => ({image:getComputedStyle(el).backgroundImage,position:getComputedStyle(el).backgroundPosition}));
  await page.getByRole('button', { name: 'Back to selected Look' }).click();
  const ids = await page.locator('#screen-list [data-id]').evaluateAll(links => links.map(link => link.dataset.id));
  expect(new Set(ids).size).toBe(ids.length);
  expect(ids.filter(id => id === 'E-06')).toHaveLength(1);
  // Direct hash entry is also the path used by the mobile inventory.
  await page.goto('/1.html#E-06');
  await expect(page.locator('.tryon-screen')).toBeVisible();
  await expect(page.locator('.tryon-copy h2')).toHaveText('Asymmetric Black Dress');
  expect(await page.locator('.tryon-frame').evaluate(el => ({image:getComputedStyle(el).backgroundImage,position:getComputedStyle(el).backgroundPosition}))).toEqual(view);
  await expect(page.getByRole('button', { name: 'Make it mine', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next view', exact: true }).click();
  await expect(page.locator('.tryon-frame')).toHaveAttribute('aria-label', /Front view/);
});

test('fresh E-06 deep link previews the result without marking Twin setup completed', async ({ page }) => {
  await page.goto('/1.html#E-06');
  await expect(page.locator('.tryon-stage')).toBeVisible();
  await page.getByRole('button', { name: 'Next view', exact: true }).click();
  await expect(page.locator('.tryon-frame')).toHaveAttribute('aria-label', /3\/4 view/);
  expect(await page.evaluate(() => localStorage.getItem('styleiqTwinSetupV2'))).toBeNull();
  await page.getByRole('button', { name: 'Back to selected Look' }).click();
  await tryOn(page).click();
  await route(page, 'H-01');
});
