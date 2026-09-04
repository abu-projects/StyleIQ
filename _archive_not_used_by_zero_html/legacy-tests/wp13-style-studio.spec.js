const { test, expect } = require('@playwright/test');

async function openStudioWithCloset(page, items, mode = 'closet') {
  await page.goto('/index.html#screen-h-1');
  await page.evaluate(({ closetItems, startMode }) => {
    prototypeState.closet.items = closetItems;
    renderStudioHome();
    wp13ChooseStart(startMode);
  }, { closetItems: items, startMode: mode });
  await expect(page).toHaveURL(/#screen-h-3$/);
}

test.describe('WP-13 visual-first Style Studio', () => {
  test('zero-item Closet clearly separates suggested visual pieces', async ({ page }) => {
    await openStudioWithCloset(page, []);
    await expect(page.locator('#screen-h-3 [data-studio-item]')).toHaveCount(6);
    await expect(page.locator('#screen-h-3 .wp13-origin', { hasText: 'Suggested' })).toHaveCount(6);
    await expect(page.locator('#screen-h-3 .wp13-origin', { hasText: 'Owned' })).toHaveCount(0);
  });

  test('one-item start anchors the owned piece and supplements it visually', async ({ page }) => {
    const anchor = { id: 'actual-shirt', name: 'Actual Ivory Shirt', image: 'images/item_silk_shell.png', category: 'Top', color: 'Ivory' };
    await openStudioWithCloset(page, [anchor], 'one');
    await expect(page.locator('[data-studio-item="actual-shirt"]')).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-studio-item="actual-shirt"] .wp13-origin')).toHaveText('Owned');
    expect(await page.locator('#screen-h-3 .wp13-origin', { hasText: 'Suggested' }).count()).toBeGreaterThan(0);
  });

  test('populated Closet uses only real thumbnails and opens the editable canvas', async ({ page }) => {
    const items = [
      { id: 'real-layer', name: 'Real Layer', image: 'images/item_blazer.png', category: 'Outerwear' },
      { id: 'real-top', name: 'Real Top', image: 'images/item_silk_shell.png', category: 'Top' },
      { id: 'real-bottom', name: 'Real Bottom', image: 'images/cat_clothing.png', category: 'Bottoms' },
      { id: 'real-shoe', name: 'Real Shoe', image: 'images/cat_shoes.png', category: 'Shoes' }
    ];
    await openStudioWithCloset(page, items);
    await expect(page.locator('#screen-h-3 .wp13-origin', { hasText: 'Owned' })).toHaveCount(4);
    await expect(page.locator('#screen-h-3 .wp13-origin', { hasText: 'Suggested' })).toHaveCount(0);
    for (const item of items) await page.locator(`[data-studio-item="${item.id}"]`).click();
    await page.locator('#screen-h-3 [data-wp13-open]').click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    await expect(page.locator('#studio-canvas-count')).toHaveText('4 pieces');
    await expect(page.locator('#screen-h-4 [data-wear-item][aria-pressed="true"]')).toHaveCount(4);
  });
});
