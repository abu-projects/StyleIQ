const { test, expect } = require('@playwright/test');

async function openTwin(page) {
  await page.goto('/index.html#screen-h-4');
  await page.evaluate(() => {
    prototypeState.styleTwinStatus = 'Complete';
    activeStudioFinal().displayMode = 'twin';
    renderStudioCanvas();
  });
  await page.locator('#screen-h-4').scrollIntoViewIfNeeded();
  await expect(page.locator('.simple-twin-stage')).toBeVisible();
}

async function seedOutfit(page, ids = []) {
  await page.evaluate((itemIds) => {
    const studio = activeStudioFinal();
    studio.canvasItems = [];
    studio.simpleHistory = [];
    studio.canvasHistory = [];
    itemIds.forEach((id) => placeStudioItem(id));
  }, ids);
}

test.describe('H-4 simple Dress My Twin configurator', () => {
  test.beforeEach(async ({ page }) => openTwin(page));

  test('shows a centered Twin, neutral stage, categories, and carousel without editor controls', async ({ page }) => {
    await expect(page.locator('.simple-twin-image')).toBeVisible();
    await expect(page.locator('.simple-category-tabs')).toBeVisible();
    await expect(page.locator('.simple-item-carousel')).toBeVisible();
    await expect(page.locator('[data-garment-id], [data-stage-action], [data-angle], [data-garment-action]')).toHaveCount(0);
    await expect(page.locator('.simple-twin-stage')).toHaveCSS('background-color', 'rgb(248, 246, 243)');
  });

  test('tapping a top replaces the active Top and updates the Twin visual', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer', 'studio-trouser']);
    await page.locator('[data-simple-category="Tops"]').click();
    const before = await page.locator('.simple-twin-image').getAttribute('src');
    await page.locator('[data-wear-item="studio-knit"]').click();
    await expect(page.locator('[data-wear-item="studio-knit"]')).toHaveAttribute('aria-pressed', 'true');
    const result = await page.evaluate(() => ({
      tops: activeStudioFinal().canvasItems.filter(item => item.role === 'Base').map(item => item.id),
      image: activeStudioFinal().twinVisual
    }));
    expect(result.tops).toEqual(['studio-knit']);
    expect(result.image).not.toBe(before);
  });

  test('shoe switching leaves the rest of the outfit unchanged', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer', 'studio-knit', 'studio-trouser', 'studio-loafer']);
    await page.locator('[data-simple-category="Shoes"]').click();
    await page.locator('[data-wear-item="studio-sneaker"]').click();
    const ids = await page.evaluate(() => activeStudioFinal().canvasItems.map(item => item.id));
    expect(ids).toEqual(['studio-blazer', 'studio-knit', 'studio-trouser', 'studio-sneaker']);
    await expect(page.locator('[data-wear-item="studio-sneaker"]')).toHaveAttribute('aria-pressed', 'true');
  });

  test('one item per primary category builds a four-piece look', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer', 'studio-knit', 'studio-trouser', 'studio-loafer']);
    const roles = await page.evaluate(() => activeStudioFinal().canvasItems.map(item => item.role));
    expect(new Set(roles).size).toBe(4);
    await expect(page.locator('#studio-canvas-count')).toHaveText('4 pieces');
  });

  test('selecting another outerwear item never duplicates the role', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer']);
    await page.evaluate(() => {
      prototypeState.closet.items.push({ id: 'test-jacket', name: 'Black Jacket', category: 'Outerwear', image: 'images/style_classic.png' });
      placeStudioItem('test-jacket');
    });
    const outerwear = await page.evaluate(() => activeStudioFinal().canvasItems.filter(item => item.role === 'Main layer').map(item => item.id));
    expect(outerwear).toEqual(['test-jacket']);
  });

  test('Undo restores the previous shoe selection', async ({ page }) => {
    await seedOutfit(page, ['studio-loafer']);
    await page.locator('[data-simple-category="Shoes"]').click();
    await page.locator('[data-wear-item="studio-sneaker"]').click();
    await page.locator('#simple-undo').click();
    const shoes = await page.evaluate(() => activeStudioFinal().canvasItems.filter(item => item.role === 'Shoes').map(item => item.id));
    expect(shoes).toEqual(['studio-loafer']);
  });

  test('Reset Outfit keeps the Twin and Closet, and Undo restores the look', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer', 'studio-knit', 'studio-trouser']);
    const closetCount = await page.locator('[data-wear-item]').count();
    await page.locator('#simple-reset-outfit').click();
    await expect(page.locator('.simple-twin-image')).toBeVisible();
    await expect(page.locator('#studio-canvas-count')).toHaveText('0 pieces');
    await expect(page.locator('[data-wear-item]')).toHaveCount(closetCount);
    await page.locator('#simple-undo').click();
    await expect(page.locator('#studio-canvas-count')).toHaveText('3 pieces');
  });

  test('H-3 seeded choices appear worn when H-4 opens', async ({ page }) => {
    await page.evaluate(() => {
      const studio = activeStudioFinal();
      studio.selectedClosetItemIds = ['studio-blazer', 'studio-knit', 'studio-trouser', 'studio-loafer'];
      studio.canvasItems = studio.selectedClosetItemIds.map(id => studioItemById(id));
      renderStudioCanvas();
    });
    await expect(page.locator('#studio-canvas-count')).toHaveText('4 pieces');
    await expect(page.locator('[data-wear-item][aria-pressed="true"]')).toHaveCount(4);
  });

  test('Flat Lay and Twin share the same selections', async ({ page }) => {
    await seedOutfit(page, ['studio-blazer', 'studio-knit', 'studio-trouser', 'studio-loafer']);
    await page.getByRole('button', { name: 'Flat Lay' }).click();
    await expect(page.locator('.simple-flat-slot img')).toHaveCount(4);
    await page.getByRole('button', { name: 'On My Twin' }).click();
    await expect(page.locator('[data-wear-item][aria-pressed="true"]')).toHaveCount(4);
  });

  test('Muse changes the selected shoe through the shared draft', async ({ page }) => {
    await seedOutfit(page, ['studio-knit', 'studio-loafer']);
    await page.evaluate(() => applyMuseSuggestion());
    const result = await page.evaluate(() => ({ shoes: activeStudioFinal().canvasItems.filter(item => item.role === 'Shoes').map(item => item.id), visual: activeStudioFinal().twinVisual }));
    expect(result.shoes).toHaveLength(1);
    await expect(page.locator('.simple-twin-image')).toHaveAttribute('src', result.visual);
  });

  test('H-5 reflects the current Twin and restores H-4 selections', async ({ page }) => {
    await seedOutfit(page, ['studio-knit', 'studio-trouser']);
    const visual = await page.evaluate(() => activeStudioFinal().twinVisual);
    await page.getByRole('button', { name: 'Review Outfit' }).click();
    await expect(page).toHaveURL(/#screen-h-5$/);
    await expect(page.locator('[data-simple-review="true"] img')).toHaveAttribute('src', visual);
    await page.goto('/index.html#screen-h-4');
    await expect(page.locator('[data-wear-item][aria-pressed="true"]')).toHaveCount(2);
  });

  test('keeps Section H routes unique and reachable', async ({ page }) => {
    const audit = await page.evaluate(() => ({
      duplicates: Array.from({ length: 17 }, (_, index) => `screen-h-${index + 1}`).filter(id => document.querySelectorAll(`#${id}`).length !== 1),
      missing: [...document.querySelectorAll('#section-h a[href^="#screen-h-"]')].filter(link => !document.querySelector(link.getAttribute('href'))).length
    }));
    expect(audit).toEqual({ duplicates: [], missing: 0 });
  });
});

test('375 × 812 keeps the Twin, tabs, carousel, and CTA usable without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await openTwin(page);
  await expect(page.locator('.simple-twin-stage')).toBeVisible();
  await expect(page.locator('.simple-category-tabs')).toBeVisible();
  await expect(page.locator('.simple-item-carousel')).toBeVisible();
  await page.locator('[data-simple-category="Shoes"]').click();
  await page.locator('[data-wear-item="studio-sneaker"]').scrollIntoViewIfNeeded();
  await page.locator('[data-wear-item="studio-sneaker"]').click();
  await expect(page.getByRole('button', { name: 'Review Outfit' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
