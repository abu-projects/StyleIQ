const { test, expect } = require('@playwright/test');

test('single experience shows only the active screen', async ({ page }) => {
  await page.goto('/styleiq-single-experience.html#screen-a-1');
  await expect(page.locator('[id^="screen-"]:visible')).toHaveCount(1);
  await expect(page.locator('#screen-a-1')).toBeVisible();

  await page.locator('.single-bottom-nav').getByRole('link', { name: 'Discover' }).click();
  await expect(page).toHaveURL(/#screen-g-1$/);
  await expect(page.locator('[id^="screen-"]:visible')).toHaveCount(1);
  await expect(page.locator('#screen-g-1')).toBeVisible();
});

test('bottom navigation starts after onboarding and remains on detail screens', async ({ page }) => {
  await page.goto('/styleiq-single-experience.html#screen-x-1');
  await expect(page.locator('.single-bottom-nav:visible')).toHaveCount(0);

  await page.goto('/styleiq-single-experience.html#screen-y-2');
  await expect(page.locator('.single-bottom-nav:visible')).toHaveCount(0);

  await page.goto('/styleiq-single-experience.html#screen-y-3');
  await expect(page.locator('.single-bottom-nav:visible')).toHaveCount(1);

  await page.goto('/styleiq-single-experience.html#screen-f-10');
  await expect(page.locator('.single-bottom-nav:visible')).toHaveCount(1);
});

test('More opens as a full-frame app surface and has an explicit Close action', async ({ page }) => {
  await page.goto('/styleiq-single-experience.html#screen-a-1');
  await page.getByRole('button', { name: 'Open More' }).click();

  const frame = page.locator('#screen-a-1 .single-phone-frame');
  const dialog = page.getByRole('dialog', { name: 'More' });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveCSS('background-color', 'rgb(248, 246, 243)');
  await expect(dialog.locator('.single-more-link').first()).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  const fillsPhoneDisplay = await frame.evaluate((phone) => {
    const panel = phone.querySelector('.single-more-panel');
    return panel.offsetWidth === phone.clientWidth && panel.offsetHeight === phone.clientHeight;
  });
  expect(fillsPhoneDisplay).toBe(true);

  await dialog.getByRole('button', { name: 'Close More' }).click();
  await expect(dialog).toHaveCount(0);
});

test('post-onboarding screens do not render the removed global header', async ({ page }) => {
  for (const id of ['screen-a-1', 'screen-f-10']) {
    await page.goto(`/styleiq-single-experience.html#${id}`);
    await expect(page.locator(`#${id} .styleiq-global-header`)).toHaveCount(0);
  }
});

test('More search opens the app-wide search instead of filtering the menu', async ({ page }) => {
  await page.goto('/styleiq-single-experience.html#screen-a-1');
  await page.getByRole('button', { name: 'Open More' }).click();
  await page.getByRole('button', { name: 'Open global StyleIQ search' }).click();

  const searchDialog = page.getByRole('dialog', { name: 'Search StyleIQ' });
  await expect(searchDialog).toBeVisible();
  await searchDialog.getByRole('searchbox').fill('screen-c-6');
  await expect(searchDialog.locator('a[href="#screen-c-6"]')).toBeVisible();

  await searchDialog.getByRole('button', { name: 'Close Search StyleIQ' }).click();
  await expect(searchDialog).toHaveCount(0);
  await expect(page.getByRole('dialog', { name: 'More' })).toBeVisible();
});
