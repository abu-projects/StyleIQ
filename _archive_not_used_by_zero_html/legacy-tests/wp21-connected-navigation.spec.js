const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html#screen-a-1');
});

test('primary app screens keep a persistent global search header', async ({ page }) => {
  for (const id of ['screen-a-1', 'screen-c-1', 'screen-d-1', 'screen-g-1', 'screen-f-1']) {
    await page.goto(`/index.html#${id}`);
    await expect(page.locator(`#${id} .styleiq-global-header`)).toHaveCount(1);
    await expect(page.locator(`#${id} .styleiq-global-search input`)).toBeVisible();
  }
});

test('More connects secondary destinations to the primary app shell', async ({ page }) => {
  await page.locator('#screen-a-1 .styleiq-more-link').click();
  const dialog = page.getByRole('dialog', { name: 'More' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Style Studio/ })).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Wardrobe Value/ })).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Style Twin/ })).toBeVisible();
  await dialog.getByRole('link', { name: /Style Studio/ }).click();
  await expect(page).toHaveURL(/#screen-h-1$/);
});

test('global search finds and opens an isolated screen', async ({ page }) => {
  const search = page.locator('#screen-a-1 .styleiq-global-search input');
  await search.click();
  const dialog = page.getByRole('dialog', { name: 'Search StyleIQ' });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('searchbox').fill('Style Boards');
  await dialog.getByRole('link', { name: /Style Boards/i }).click();
  await expect(page).toHaveURL(/#screen-f-10$/);
});
