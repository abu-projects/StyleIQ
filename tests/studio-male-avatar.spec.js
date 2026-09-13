const {test, expect} = require('@playwright/test');

// Regression: Menswear My Studio showed only flat products, with no male avatar.
test('menswear studio shows a male avatar and keeps outfit changes after reload', async ({page}) => {
  await page.addInitScript(() => localStorage.setItem('styleiqStylingContextV1', 'Menswear'));
  await page.goto('/index.html#F-01');
  const avatar = page.getByRole('img', {name: /^Male avatar/});
  await expect(avatar).toBeVisible();
  await expect(page.getByText('Flat lay · Your selected outfit', {exact: true})).toHaveCount(0);
  const image = await page.request.get('/images/studio-male-avatar-sheet.png');
  expect(image.ok()).toBeTruthy();
  for (const name of ['Rust knit polo', 'Cream trousers', 'White sneakers', 'Camel blazer', 'Tan leather watch']) {
    await page.getByRole('button', {name: `Try ${name}`, exact: true}).click();
    await expect(avatar).toHaveAttribute('aria-label', new RegExp(name));
    await expect(page.getByRole('button', {name: `Change ${name}`, exact: true})).toBeVisible();
  }
  await page.reload();
  await expect(avatar).toHaveAttribute('aria-label', /Rust knit polo, Cream trousers, White sneakers, Camel blazer, Tan leather watch/);
});
