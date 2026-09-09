const { test, expect } = require('@playwright/test');

async function readyTwin(page, complete = true) {
  await page.goto('/index.html#D-02');
  await page.evaluate((isComplete) => {
    localStorage.clear();
    if (isComplete) localStorage.setItem('styleiqTwinSetupV2', JSON.stringify({
      method: 'photo', step: 4, complete: true, id: 'context-test-twin'
    }));
  }, complete);
  await page.reload();
}

const resultTitle = page => page.locator('.tryon-copy h2');

test.describe('Try-On context entry points', () => {
  test('outfit family, Saved Look, and community entries preserve their source Look', async ({ page }) => {
    await readyTwin(page);
    for (const source of [
      { route: 'D-04', action: 'Try on', title: 'Coffee Meeting' },
      { route: 'G-02', action: 'Try On', title: 'Design Review' },
      { route: 'K-04', action: 'Try On', title: 'Coffee Meeting' },
    ]) {
      await page.goto(`/index.html#${source.route}`);
      await page.locator("#app").getByRole('button', { name: source.action, exact: true }).click();
      await expect(page.locator('#app')).toHaveAttribute('data-screen', 'E-06');
      await expect(resultTitle(page)).toHaveText(source.title);
      expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqTryOnResultV1')).sourceScreen)).toBe(source.route);
      await page.locator("#app").getByRole('button', { name: 'Back to selected Look' }).click();
      await expect(page.locator('#app')).toHaveAttribute('data-screen', source.route);
    }
  });

  test('an unfinished Twin setup resumes the originating community Look', async ({ page }) => {
    await readyTwin(page, false);
    await page.goto('/index.html#K-04');
    await page.locator("#app").getByRole('button', { name: 'Try On', exact: true }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'H-01');
    await page.locator("#app").getByRole('button', { name: 'Create without personal photos' }).click();
    await page.locator("#app").getByRole('button', { name: 'Use this reference' }).click();
    await page.locator("#app").getByRole('button', { name: 'Create first preview' }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'E-06');
    await expect(resultTitle(page)).toHaveText('Coffee Meeting');
    expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqTryOnResultV1')).sourceScreen)).toBe('K-04');
  });

  test('cancelling one attempt does not leak its Look into the next attempt', async ({ page }) => {
    await readyTwin(page);
    await page.goto('/index.html#D-02');
    await page.locator("#app").getByRole('button', { name: 'Try On', exact: true }).click();
    await expect(resultTitle(page)).toHaveText('Coffee Meeting');
    await page.locator("#app").getByRole('button', { name: 'Back to selected Look' }).click();
    await page.locator('.today-look-card').filter({ hasText: 'Asymmetric Black Dress' }).click();
    await page.locator("#app").getByRole('button', { name: 'Try On', exact: true }).click();
    await expect(resultTitle(page)).toHaveText('Asymmetric Black Dress');
    expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqTryOnResultV1')).lookId)).toBe('evening');
  });
});
