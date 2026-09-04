const { test, expect } = require('@playwright/test');

test.describe('WP-14 Creator outfit-first experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html#screen-h-9');
  });

  test('outfit-led discovery preserves Creator and outfit selection', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Maya Chen profile' }).click();
    await expect(page).toHaveURL(/#screen-h-10$/);
    await expect(page.locator('#screen-h-10 .wp14-outfit-grid')).toBeVisible();
    await page.getByRole('button', { name: 'Open Tonal Weekend outfit' }).click();
    await expect(page).toHaveURL(/#screen-h-13$/);
    await expect(page.locator('#screen-h-13')).toContainText('Maya Chen');
    await expect(page.locator('#screen-h-13')).toContainText('Tonal Weekend');
    const selected = await page.evaluate(() => ({
      creator: creatorIntelligenceState.selectedCreatorId,
      outfit: creatorIntelligenceState.selectedOutfitId
    }));
    expect(selected).toEqual({ creator: 'maya-chen', outfit: 'maya-tonal-weekend' });
  });

  test('reconstruction maps exact, similar, and missing roles and reaches H4', async ({ page }) => {
    await page.evaluate(() => {
      prototypeState.closet.items = [
        { id: 'owned-layer', name: 'Relaxed blazer', image: 'images/item_blazer.png', category: 'Outerwear' },
        { id: 'owned-top', name: 'Ivory shell', image: 'images/item_silk_shell.png', category: 'Tops' }
      ];
      creatorIntelligenceState.selectedCreatorId = 'maya-chen';
      creatorIntelligenceState.selectedOutfitId = 'maya-soft-tailoring';
      renderWp14CreatorRecreate();
      location.hash = 'screen-h-14';
    });
    await expect(page.locator('#screen-h-14 [data-match="exact"]')).toHaveCount(2);
    await expect(page.locator('#screen-h-14')).toContainText('Missing');
    await page.getByRole('button', { name: 'Build This Version' }).click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    const source = await page.evaluate(() => activeStudioFinal().creatorSource);
    expect(source.creatorName).toBe('Maya Chen');
    expect(source.outfitName).toBe('Soft Tailoring');
  });

  test('Try On routes by Style Twin availability without losing attribution', async ({ page }) => {
    await page.evaluate(() => {
      creatorIntelligenceState.selectedCreatorId = 'maya-chen';
      creatorIntelligenceState.selectedOutfitId = 'maya-soft-tailoring';
      prototypeState.vNext.styleTwinMode = 'none';
      prototypeState.styleTwinStatus = 'Not started';
      renderWp14CreatorOutfit();
      location.hash = 'screen-h-13';
    });
    await page.getByRole('button', { name: 'Try On' }).click();
    await expect(page).toHaveURL(/#screen-y-3$/);
    expect(await page.evaluate(() => prototypeState.creatorTwinReturn)).toBe('screen-h-13');

    await page.evaluate(() => {
      prototypeState.vNext.styleTwinMode = 'photo';
      prototypeState.styleTwinStatus = 'Complete';
      location.hash = 'screen-h-13';
      renderWp14CreatorOutfit();
    });
    await page.getByRole('button', { name: 'Try On' }).click();
    await expect(page).toHaveURL(/#screen-h-4$/);
    expect(await page.evaluate(() => activeStudioFinal().creatorSource.creatorId)).toBe('maya-chen');
  });

  test('missing-piece shopping carries Creator affiliate context to G2', async ({ page }) => {
    await page.evaluate(() => {
      prototypeState.closet.items = [];
      creatorIntelligenceState.selectedCreatorId = 'maya-chen';
      creatorIntelligenceState.selectedOutfitId = 'maya-soft-tailoring';
      renderWp14CreatorOutfit();
      location.hash = 'screen-h-13';
    });
    await page.locator('#screen-h-13').getByRole('button', { name: 'Shop Missing' }).first().click();
    await expect(page).toHaveURL(/#screen-g-2$/);
    const attribution = await page.evaluate(() => creatorIntelligenceState.affiliateContext);
    expect(attribution.creatorId).toBe('maya-chen');
    expect(attribution.outfitId).toBe('maya-soft-tailoring');
    expect(attribution.attribution).toBe('Creator link');
  });

  test('save, Planner, and Wishlist actions do not create duplicates', async ({ page }) => {
    const result = await page.evaluate(() => {
      creatorIntelligenceState.selectedOutfitId = 'maya-soft-tailoring';
      creatorIntelligenceState.savedOutfitIds = [];
      creatorIntelligenceState.plannedOutfitIds = [];
      creatorIntelligenceState.wishlistMissingIds = [];
      wp14SaveOutfit('maya-soft-tailoring');
      wp14PlanOutfit();
      wp14PlanOutfit();
      wp14Wishlist('maya-blazer');
      wp14Wishlist('maya-blazer');
      return {
        saved: creatorIntelligenceState.savedOutfitIds,
        planned: creatorIntelligenceState.plannedOutfitIds,
        wishlist: creatorIntelligenceState.wishlistMissingIds
      };
    });
    expect(result.saved).toEqual(['maya-soft-tailoring']);
    expect(result.planned).toEqual(['maya-soft-tailoring']);
    expect(result.wishlist).toEqual(['maya-blazer']);
  });
});
