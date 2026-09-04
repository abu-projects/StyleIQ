const { test, expect } = require('@playwright/test');

async function resetDiscover(page, closetItems = []) {
  await page.goto('/index.html#screen-g-1');
  await page.evaluate((items) => {
    prototypeState.closet.items = items;
    prototypeState.wishlist.items = [];
    const state = prototypeState.vNext.wp15Discover;
    state.selectedOutfitId = 'discover-coffee';
    state.selectedProductId = 'tailored-dark-trouser';
    state.reconstruct = false;
    state.savedOutfitIds = [];
    state.plannedOutfitIds = [];
    state.listingFilter = 'all';
    state.usersOnly = false;
    state.affiliateContext = null;
    renderShoppingIntelligence();
  }, closetItems);
}

test.describe('WP-15 outfit-driven Discover and shopping', () => {
  test('G1 starts with outfits and returns from outfit detail without losing selection', async ({ page }) => {
    await resetDiscover(page);
    await expect(page.locator('#screen-g-1 .wp15-look')).toHaveCount(5);
    await expect(page.locator('#screen-g-1 .wp15-look.featured img').first()).toBeVisible();
    await page.locator('#screen-g-1').getByRole('button', { name: 'Open Coffee Meeting outfit' }).click();
    await expect(page).toHaveURL(/#screen-g-10$/);
    await expect(page.locator('#screen-g-10')).toContainText('Coffee Meeting');
    await page.locator('#screen-g-10').getByRole('link', { name: 'Back' }).click();
    await expect(page).toHaveURL(/#screen-g-1$/);
    expect(await page.evaluate(() => prototypeState.vNext.wp15Discover.selectedOutfitId)).toBe('discover-coffee');
  });

  test('zero-item Closet preserves inspiration and exposes zero coverage plus missing actions', async ({ page }) => {
    await resetDiscover(page);
    await page.locator('#screen-g-1').getByRole('button', { name: 'Open Coffee Meeting outfit' }).click();
    await page.locator('#screen-g-10').getByRole('button', { name: 'Make From My Closet' }).click();
    await expect(page.locator('#screen-g-10')).toContainText('0 / 4 matched');
    await expect(page.locator('#screen-g-10 .wp15-missing')).toHaveCount(4);
    await expect(page.locator('#screen-g-10').getByRole('link', { name: 'Add Items I Own' })).toBeVisible();

    await page.evaluate(() => {
      prototypeState.vNext.styleTwinMode = 'none';
      prototypeState.styleTwinStatus = 'Not started';
    });
    await page.locator('#screen-g-10').getByRole('button', { name: 'Preview Discover Outfit on Style Twin' }).click();
    await expect(page).toHaveURL(/#screen-y-3$/);
    expect(await page.evaluate(() => prototypeState.vNext.wp15Discover.selectedOutfitId)).toBe('discover-coffee');
  });

  test('one owned item is mapped accurately and survives the Studio handoff', async ({ page }) => {
    await resetDiscover(page, [
      { id: 'owned-shell', name: 'Ivory shell', category: 'Tops', image: 'images/item_silk_shell.png' }
    ]);
    await page.evaluate(() => {
      prototypeState.vNext.wp15Discover.reconstruct = true;
      location.hash = 'screen-g-10';
      renderShoppingIntelligence();
    });
    await expect(page.locator('#screen-g-10')).toContainText('1 / 4 matched');
    await expect(page.locator('#screen-g-10 [data-match="exact"]')).toHaveCount(1);
    await page.locator('#screen-g-10').getByRole('button', { name: 'Open in Studio' }).click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    const handoff = await page.evaluate(() => activeStudioFinal().discoverSource);
    expect(handoff).toMatchObject({ outfitId: 'discover-coffee', source: 'StyleIQ' });
  });

  test('fully owned outfit removes unnecessary shopping', async ({ page }) => {
    await resetDiscover(page, [
      { id: 'owned-blazer', name: 'Relaxed blazer', category: 'Outerwear', image: 'images/item_blazer.png' },
      { id: 'owned-shell', name: 'Ivory shell', category: 'Tops', image: 'images/item_silk_shell.png' },
      { id: 'owned-trouser', name: 'Straight trouser', category: 'Bottoms', image: 'images/style_modern_prof.png' },
      { id: 'owned-loafers', name: 'Leather loafers', category: 'Shoes', image: 'images/cat_shoes.png' }
    ]);
    await page.evaluate(() => {
      prototypeState.vNext.wp15Discover.reconstruct = true;
      location.hash = 'screen-g-10';
      renderShoppingIntelligence();
    });
    await expect(page.locator('#screen-g-10')).toContainText('4 / 4 matched');
    await expect(page.locator('#screen-g-10')).toContainText('Fully owned');
    await expect(page.locator('#screen-g-10').getByRole('button', { name: 'Shop' })).toHaveCount(0);
    await expect(page.locator('#screen-g-10').getByText('Shop Missing', { exact: true })).toHaveCount(0);
  });

  test('available Style Twin routes Try On to the shared H4 experience', async ({ page }) => {
    await resetDiscover(page);
    await page.evaluate(() => {
      prototypeState.vNext.styleTwinMode = 'photo';
      prototypeState.styleTwinStatus = 'Complete';
      location.hash = 'screen-g-10';
      renderShoppingIntelligence();
    });
    await page.locator('#screen-g-10').getByRole('button', { name: 'Preview Discover Outfit on Style Twin' }).click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    expect(await page.evaluate(() => activeStudioFinal().discoverSource.outfitId)).toBe('discover-coffee');
  });

  test('Creator commerce retains attribution through New and Pre-owned options and Wishlist', async ({ page }) => {
    await resetDiscover(page);
    await page.evaluate(() => {
      wp15OpenOutfit('discover-creator');
    });
    await page.locator('#screen-g-10').getByRole('button', { name: 'Shop' }).first().click();
    await expect(page).toHaveURL(/#screen-g-2$/);
    await expect(page.locator('#screen-g-2').getByRole('button', { name: 'New', exact: true })).toBeVisible();
    await expect(page.locator('#screen-g-2').getByRole('button', { name: 'Pre-owned', exact: true })).toBeVisible();
    await page.locator('#screen-g-2').getByRole('button', { name: 'Pre-owned', exact: true }).click();
    await expect(page.locator('#screen-g-2 .wp15-listing')).toHaveCount(2);
    await page.locator('#screen-g-2').getByRole('button', { name: 'StyleIQ Users Only' }).click();
    await expect(page.locator('#screen-g-2 .wp15-listing')).toHaveCount(1);
    await page.locator('#screen-g-2').getByRole('button', { name: 'Save to Wishlist' }).click();
    await page.goto('/index.html#screen-g-8');
    await expect(page.locator('#screen-g-8 .wp15-wishlist-card')).toHaveCount(1);
    const attribution = await page.evaluate(() => prototypeState.vNext.wp15Discover.affiliateContext);
    expect(attribution).toMatchObject({ outfitId: 'discover-creator', creatorId: 'maya-chen' });
  });

  test('Wardrobe Opportunity and Style Check communicate through product and outfit visuals', async ({ page }) => {
    await resetDiscover(page);
    await page.goto('/index.html#screen-g-11');
    await expect(page.locator('#screen-g-11 .wp15-opportunity-looks img')).toHaveCount(3);
    await expect(page.locator('#screen-g-11')).toContainText('Leather loafers unlock 3 outfits');
    await page.goto('/index.html#screen-g-4');
    await expect(page.locator('#screen-g-4 .wp15-product-hero img')).toBeVisible();
    await expect(page.locator('#screen-g-4 .wp15-related img')).toHaveCount(3);
    await expect(page.locator('#screen-g-4')).toContainText('Similar owned');
  });

  test('Creator profile returns to Discover through origin-aware back navigation', async ({ page }) => {
    await resetDiscover(page);
    await page.locator('#screen-g-1').getByRole('button', { name: /Maya Chen · View Creator/ }).click();
    await expect(page).toHaveURL(/#screen-h-10$/);
    await page.locator('#screen-h-10').getByRole('link', { name: 'Back to Discover' }).click();
    await expect(page).toHaveURL(/#screen-g-1$/);
  });
});
