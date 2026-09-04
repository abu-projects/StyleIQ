const { test, expect } = require('@playwright/test');

const blazer = {
  id: 'owned-blazer', name: 'Relaxed Blazer', brand: 'Maison Row', category: 'Blazer',
  color: 'Camel', image: 'images/item_blazer.png', wearCount: 11, lastWorn: 'Tuesday', purchasePrice: 188
};
const shell = {
  id: 'owned-shell', name: 'Silk Shell', brand: 'COS', category: 'Top',
  color: 'Ivory', image: 'images/item_silk_shell.png', wearCount: 3, lastWorn: '84 days ago', purchasePrice: 120
};
const loafers = {
  id: 'owned-loafers', name: 'Leather Loafers', brand: 'Vagabond', category: 'Shoes',
  color: 'Black', image: 'images/cat_shoes.png', wearCount: 31, lastWorn: 'Friday', purchasePrice: 192
};

async function resetCloset(page, items = []) {
  await page.goto('/index.html#screen-c-1');
  await page.evaluate((closetItems) => {
    prototypeState.closet.items = closetItems;
    prototypeState.closet.lastAddedItem = closetItems.at(-1) || null;
    prototypeState.closetItemCount = closetItems.length;
    prototypeState.studio.savedLooks = [];
    prototypeState.planner = { items: [] };
    const state = prototypeState.vNext.wp16Closet;
    state.selectedItemId = closetItems.at(-1)?.id || null;
    state.selectedOutfitId = 'closet-office';
    state.filter = 'All';
    state.savedOutfitIds = [];
    state.plannedOutfitIds = [];
    renderWp16Closet();
  }, items);
}

test.describe('WP-16 outfit-enabling Closet', () => {
  test('zero Closet stays visual with persistent Add and outfit inspiration', async ({ page }) => {
    await resetCloset(page);
    await expect(page.locator('#screen-c-1 .wp16-empty-collage img')).toHaveCount(3);
    await expect(page.locator('#screen-c-1 .wp16-outfit-card')).toHaveCount(3);
    await expect(page.locator('#screen-c-1 .wp16-add')).toBeVisible();
    await page.locator('#screen-c-1').getByRole('button', { name: 'Add an item' }).first().click();
    await expect(page).toHaveURL(/#screen-c-2$/);
  });

  test('one-item Closet immediately offers three outfits and item detail', async ({ page }) => {
    await resetCloset(page, [blazer]);
    await expect(page.locator('#screen-c-1 .wp16-anchor img')).toBeVisible();
    await expect(page.locator('#screen-c-1 .wp16-outfit-card')).toHaveCount(3);
    await page.locator('#screen-c-1').getByRole('button', { name: 'Style It' }).click();
    await expect(page).toHaveURL(/#screen-c-7$/);
    await expect(page.locator('#screen-c-7')).toContainText('Maison Row');
    await page.locator('#screen-c-7').getByRole('link', { name: 'Back from Item Details' }).click();
    await expect(page).toHaveURL(/#screen-c-6$/);
  });

  test('populated Closet leads with outfits while inventory stays searchable', async ({ page }) => {
    await resetCloset(page, [blazer, shell, loafers]);
    const home = page.locator('#screen-c-1');
    await expect(home.getByText('Outfits From Your Closet')).toBeVisible();
    await expect(home.locator('.wp16-outfit-card')).toHaveCount(4);
    await expect(home.locator('.wp16-item-card')).toHaveCount(3);
    await home.getByRole('button', { name: 'Shoes' }).click();
    await expect(home.locator('.wp16-item-card')).toHaveCount(1);
    await home.getByLabel('Search Closet pieces').fill('Leather');
    await expect(home.locator('.wp16-item-card')).toHaveCount(1);
  });

  test('item detail prioritizes Style It, outfits, wear count and cost per wear', async ({ page }) => {
    await resetCloset(page, [blazer, shell]);
    await page.evaluate(() => wp16OpenItem('owned-blazer'));
    const detail = page.locator('#screen-c-7');
    await expect(detail.locator('.wp16-detail-hero img')).toBeVisible();
    await expect(detail.getByRole('button', { name: 'Style It' })).toBeVisible();
    await expect(detail.locator('.wp16-related img')).toHaveCount(3);
    await expect(detail.locator('.si-closet-match [data-match="owned"]')).toHaveCount(2);
    await expect(detail.locator('.si-closet-match [data-match="missing"]')).toHaveCount(2);
    await expect(detail.getByRole('button', { name: 'Shop Missing' })).toBeVisible();
    await expect(detail).toContainText('11 wears');
    await expect(detail).toContainText('$17.09 / wear');
    await expect(detail).toContainText('Similar in your Closet');
  });

  test('Closet outfit saves and plans without duplicate records', async ({ page }) => {
    await resetCloset(page, [blazer]);
    await page.evaluate(() => wp16OpenItem('owned-blazer'));
    await page.locator('#screen-c-7').getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('#screen-c-7').getByRole('button', { name: 'Save', exact: true }).click();
    await page.evaluate(() => { wp16PlanOutfit(); wp16PlanOutfit(); });
    const records = await page.evaluate(() => ({
      saved: prototypeState.studio.savedLooks.filter(item => item.id === 'closet-office').length,
      planned: prototypeState.planner.items.filter(item => item.id === 'closet-office').length
    }));
    expect(records).toEqual({ saved: 1, planned: 1 });
  });

  test('Try On and Studio handoffs retain the owned anchor', async ({ page }) => {
    await resetCloset(page, [blazer]);
    await page.evaluate(() => {
      prototypeState.vNext.styleTwinMode = 'none';
      prototypeState.styleTwinStatus = 'Not started';
      wp16OpenItem('owned-blazer');
    });
    await page.locator('#screen-c-7').getByRole('button', { name: 'Preview Closet Outfit on Style Twin' }).click();
    await expect(page).toHaveURL(/#screen-y-3$/);
    await page.goto('/index.html#screen-c-7');
    await page.locator('#screen-c-7').getByRole('button', { name: 'Open in Studio' }).click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    expect(await page.evaluate(() => activeStudioFinal().closetSource.itemId)).toBe('owned-blazer');
  });

  test('wear action updates the canonical item and routes back to detail', async ({ page }) => {
    await resetCloset(page, [blazer]);
    await page.evaluate(() => wp16OpenItem('owned-blazer'));
    await page.goto('/index.html#screen-c-15');
    await page.locator('#screen-c-15').getByRole('button', { name: 'Save Wear' }).click();
    await expect(page).toHaveURL(/#screen-c-7$/);
    const updated = await page.evaluate(() => prototypeState.closet.items[0]);
    expect(updated).toMatchObject({ wearCount: 12, lastWorn: 'Today' });
  });

  test('underused, similar-pieces and seasonal insights remain visual and actionable', async ({ page }) => {
    await resetCloset(page, [blazer, shell]);
    await page.goto('/index.html#screen-c-16');
    await expect(page.locator('#screen-c-16 .wp16-related img')).toHaveCount(3);
    await page.locator('#screen-c-16').getByRole('button', { name: 'Style It' }).first().click();
    await expect(page).toHaveURL(/#screen-c-7$/);
    await page.goto('/index.html#screen-c-18');
    await expect(page.locator('#screen-c-18')).toContainText('Relaxed Blazer');
    await expect(page.locator('#screen-c-18')).toContainText('$17.09 / wear');
    await page.goto('/index.html#screen-c-19');
    await expect(page.locator('#screen-c-19 .wp16-item-card')).toHaveCount(2);
    await expect(page.locator('#screen-c-19').getByRole('button', { name: 'Compare' })).toBeVisible();
    await page.goto('/index.html#screen-c-20');
    await expect(page.locator('#screen-c-20 .wp16-season')).toHaveCount(3);
    await expect(page.locator('#screen-c-20')).toContainText('Ready to Wear');
  });

  test('manual Add keeps required validation and immediately creates outfit value', async ({ page }) => {
    await resetCloset(page);
    await page.evaluate(() => openConfirm('manual'));
    const form = page.locator('#screen-c-4 form');
    await form.locator('[name="name"]').fill('Cotton Shirt');
    await form.locator('[name="category"]').selectOption({ label: 'Top' });
    await form.locator('[name="color"]').fill('Blue');
    await form.getByRole('button', { name: 'Add & See Outfit Ideas' }).click();
    await expect(page).toHaveURL(/#screen-c-5$/);
    await expect(page.locator('#screen-c-5 .wp16-outfit-card')).toHaveCount(3);
    expect(await page.evaluate(() => prototypeState.closet.items.length)).toBe(1);
  });
});
