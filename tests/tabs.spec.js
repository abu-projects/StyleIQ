const { test, expect } = require('@playwright/test');

const tabSurfaces = [
  ['B-01', 'Add intake source'],
  ['C-01', 'Smart collections'],
  ['C-01', 'Closet categories'],
  ['C-02', 'Closet item detail sections'],
  ['E-02', 'Studio mode'],
  ['E-02', 'Preview view'],
  ['E-02', 'Active layer'],
  ['E-02', 'Piece source'],
  ['F-01', 'Style Studio sections'],
  ['G-01', 'Look creation source'],
  ['G-02', 'Saved Look sections'],
  ['G-08', 'Wishlist status'],
  ['H-11', 'Creator style categories'],
  ['J-08', 'Trip sections'],
  ['K-01', 'Discover filters'],
  ['L-03', 'My content sections'],
];

test('canonical tab surfaces expose one selected tab and a labelled panel', async ({ page }) => {
  for (const [route, label] of tabSurfaces) {
    await page.goto(`/index.html#${route}`);
    if (route === 'E-02') await page.evaluate(() => {
      currentId = 'D-02';
      app.innerHTML = canonicalStudio();
      siqEnhanceTabs(app);
    });
    if (route === 'L-03') await page.evaluate(() => {
      app.innerHTML = profileScreen({ id: 'L-03' });
      siqEnhanceTabs(app);
    });
    const tablist = page.getByRole('tablist', { name: label, exact: true });
    const tabs = tablist.getByRole('tab');
    await expect(tablist).toBeVisible();
    await expect(tablist.locator('[role="tab"][aria-selected="true"]')).toHaveCount(1);
    await expect(tablist.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);

    const selected = tablist.locator('[role="tab"][aria-selected="true"]');
    const panelId = await selected.getAttribute('aria-controls');
    const panel = page.locator(`#${panelId}`);
    await expect(panel).toBeVisible();
    const labelledBy = (await panel.getAttribute('aria-labelledby')).split(/\s+/);
    expect(labelledBy).toContain(await selected.getAttribute('id'));
  }
});

test('tabs support roving keyboard focus and remain horizontally usable on mobile', async ({ page }) => {
  await page.goto('/index.html#G-08');
  const tabs = page.getByRole('tablist', { name: 'Wishlist status' }).getByRole('tab');
  await tabs.first().focus();
  await tabs.first().press('ArrowRight');
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await expect(tabs.nth(1)).toBeFocused();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'G-08');

  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/index.html#C-01');
  const rail = page.getByRole('tablist', { name: 'Closet categories' });
  const sizing = await rail.evaluate((node) => {
    const style = getComputedStyle(node);
    return { overflowX: style.overflowX, scrollable: node.scrollWidth > node.clientWidth };
  });
  expect(sizing).toEqual({ overflowX: 'auto', scrollable: true });
  for (const tab of await rail.getByRole('tab').all()) {
    expect((await tab.boundingBox()).height).toBeGreaterThanOrEqual(44);
  }
});
