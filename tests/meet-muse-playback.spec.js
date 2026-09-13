const { test, expect } = require('@playwright/test');

// Regression: the crossfade hid Meet Muse/actions and never showed menswear.
test('Meet Muse keeps actions visible while both local films alternate', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/index.html#S-01');
  const screen = page.locator('.meet-muse-video-screen');
  const woman = screen.locator('video[src$="woman.mp4"]');
  const man = screen.locator('video[src$="/man.mp4"]');
  const assertActions = async () => {
    await expect(screen.getByRole('heading', { name: 'Hi, I’m Muse.' })).toBeInViewport();
    for (const name of ['Create account', 'Log in', 'Explore as guest']) {
      const button = screen.getByRole('button', { name, exact: true });
      await expect(button).toBeInViewport();
      await button.click({ trial: true });
    }
  };
  await assertActions();
  for (const [outgoing, incoming] of [[woman, man], [man, woman]]) {
    await expect.poll(() => outgoing.evaluate(video => video.currentTime)).toBeGreaterThan(0);
    await expect(incoming).toHaveCSS('opacity', '1', { timeout: 15000 });
    await expect(outgoing).toHaveCSS('opacity', '0');
    await expect.poll(() => incoming.evaluate(video => !video.paused && video.currentTime > 0)).toBe(true);
    await assertActions();
  }
  expect(errors).toEqual([]);
});
