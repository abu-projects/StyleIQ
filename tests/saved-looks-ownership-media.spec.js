import { test, expect } from '@playwright/test';

const app = (page) => page.locator('#app');

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html?customer=existing#G-01');
  await page.evaluate(() => {
    localStorage.setItem('styleiqSavedCreatorInspirationsV1', JSON.stringify(['maya-work']));
    localStorage.setItem('styleiqSavedLooksOwnershipTabV1', 'my');
  });
  await page.reload();
});

test('Saved Looks separates owned Looks and Inspiration actions', async ({ page }) => {
  const tabs = app(page).getByRole('tablist', { name: 'Saved Looks' });
  await expect(tabs.getByRole('tab')).toHaveCount(2);
  await expect(tabs.getByRole('tab').nth(0)).toHaveText('My Looks');
  await expect(tabs.getByRole('tab').nth(1)).toHaveText('Inspiration');
  await tabs.getByRole('tab', { name: 'Inspiration' }).click();
  await app(page).getByRole('button', { name: /Soft Workday/ }).click();
  await expect(app(page).getByRole('button', { name: 'Make It Mine' })).toBeVisible();
  await expect(app(page).getByRole('button', { name: 'Add My Media' })).toHaveCount(0);
  await expect(app(page).getByRole('button', { name: 'Edit Look' })).toHaveCount(0);
});

test('My Look accepts real photo and video and keeps media controls separate', async ({ page }) => {
  await app(page).locator('.item-card').first().click();
  await app(page).getByRole('button', { name: 'Add My Media' }).click();
  await expect(app(page).getByRole('dialog', { name: 'Add My Media' })).toBeVisible();
  await page.setInputFiles('#look-photo-upload', { name: 'wear.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgo=', 'base64') });
  await expect(app(page).getByRole('button', { name: 'Set as primary image' })).toBeVisible();
  await app(page).getByRole('dialog', { name: 'Add My Media' }).getByRole('button', { name: 'Cancel' }).click();
  await app(page).getByRole('button', { name: 'Set as primary image' }).click();
  await expect(app(page).getByText('My Wear · Primary')).toBeVisible();
  await app(page).getByRole('button', { name: 'Add My Media' }).click();
  await page.setInputFiles('#look-video-upload', { name: 'wear.mp4', mimeType: 'video/mp4', buffer: Buffer.from('prototype') });
  await app(page).getByRole('dialog', { name: 'Add My Media' }).getByRole('button', { name: 'Cancel' }).click();
  await expect(app(page).getByRole('button', { name: 'Delete video' })).toBeVisible();
  await app(page).getByRole('button', { name: 'Delete video' }).click();
  await expect(app(page).getByRole('alertdialog', { name: 'Remove media?' })).toBeVisible();
});

test('Muse video generated in Studio is the same Look media in details', async ({ page }) => {
  await page.goto('/index.html?customer=existing#F-01');
  await app(page).getByRole('button', { name: 'Generate Video with Muse' }).click();
  await expect(app(page).getByRole('region', { name: 'Muse video' }).getByRole('status')).toContainText('Muse is creating');
  await expect(app(page).getByLabel('Muse generated Look video')).toBeVisible({ timeout: 3000 });
  await app(page).getByRole('button', { name: 'Save' }).click();
  const dialog = app(page).getByRole('dialog');
  if (await dialog.count()) await dialog.getByRole('button', { name: /Save/i }).last().click();
  await page.goto('/index.html?customer=existing#G-01');
  await app(page).getByRole('button', { name: /Design Review/ }).click();
  await expect(app(page).getByRole('button', { name: 'Regenerate Muse Video' })).toBeVisible();
});
