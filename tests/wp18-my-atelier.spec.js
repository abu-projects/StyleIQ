const { test, expect } = require('@playwright/test');

async function openProfile(page) {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => {
    loadReturningUserDemo();
    openNormalProfile();
  });
}

test.describe('WP-18 visual-first My Atelier', () => {
  test('returning Profile leads with identity, looks, Closet and personal style evidence', async ({ page }) => {
    await openProfile(page);
    const profile = page.locator('#screen-f-1');
    await expect(profile.getByText('Amelia Hart', { exact: true })).toBeVisible();
    await expect(profile.getByText('My Looks', { exact: true })).toBeVisible();
    await expect(profile.getByText('My Closet', { exact: true })).toBeVisible();
    await expect(profile.getByText('My Style', { exact: true })).toBeVisible();
    await expect(profile.locator('.wp18-look img')).toHaveCount(4);
    await expect(profile).toContainText('Wishlist');
    await expect(profile).toContainText('Style Twin · Optional');
    await expect(profile).not.toContainText(/\b\d{1,3}%\b/);
    await expect(profile).not.toContainText(/style score|closet readiness/i);
  });

  test('first-run Profile shows outfit value and optional independent actions', async ({ page }) => {
    await page.goto('/index.html#screen-y-2');
    await page.locator('#screen-y-2').getByRole('button', { name: 'Personalize My StyleIQ' }).click();
    const profile = page.locator('#screen-f-1');
    await expect(profile.locator('.wp18-first-hero img')).toHaveCount(3);
    await expect(profile.getByRole('button', { name: 'Teach StyleIQ' })).toBeVisible();
    await expect(profile.getByRole('button', { name: 'Add Item', exact: true })).toBeVisible();
    await expect(profile.getByRole('button', { name: 'Import Purchases' })).toBeVisible();
    await expect(profile.getByRole('button', { name: 'Style Twin' })).toContainText('Optional');
    await profile.getByRole('button', { name: 'Explore StyleIQ' }).click();
    await expect(page).toHaveURL(/#screen-a-1$/);
  });

  test('Profile presents accurate no-Twin, no-photo, photo and in-progress states', async ({ page }) => {
    await openProfile(page);
    const profile = page.locator('#screen-f-1');
    await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'none'; prototypeState.styleTwinStatus = 'Not started'; openNormalProfile(); });
    await expect(profile.locator('img[src="images/profile_woman.png"]')).toHaveCount(0);
    await expect(profile.getByText('Create Twin', { exact: true })).toBeVisible();
    await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'no-photo'; prototypeState.styleTwinStatus = 'Complete'; openNormalProfile(); });
    await expect(profile.locator('.neutral-twin-figure')).toHaveCount(1);
    await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'photo'; prototypeState.styleTwinStatus = 'Complete'; openNormalProfile(); });
    await expect(profile.locator('img[src="images/profile_woman.png"]')).toHaveCount(2);
    await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'photo'; prototypeState.styleTwinStatus = 'In progress'; openNormalProfile(); });
    await expect(profile.getByText('Continue Twin', { exact: true })).toBeVisible();
  });

  test('Profile Closet preview reflects zero, one and populated real-item states', async ({ page }) => {
    await openProfile(page);
    const profile = page.locator('#screen-f-1');
    await page.evaluate(() => { prototypeState.closet.items = []; openNormalProfile(); });
    await expect(profile.locator('img[alt^="Owned "]')).toHaveCount(0);
    await expect(profile).toContainText('Your real Closet pieces will appear here.');
    await page.evaluate(() => { prototypeState.closet.items = [{ id:'one', name:'Ivory Shell', image:'images/item_silk_shell.png' }]; openNormalProfile(); });
    await expect(profile.locator('img[alt="Owned Ivory Shell"]')).toBeVisible();
    await page.evaluate(() => { prototypeState.closet.items.push({ id:'two', name:'Camel Blazer', image:'images/item_blazer.png' }, { id:'three', name:'Black Loafers', image:'images/cat_shoes.png' }); openNormalProfile(); });
    await expect(profile.locator('img[alt^="Owned "]')).toHaveCount(3);
    await expect(profile.getByRole('link', { name: 'Open Closet', exact: true }).first()).toHaveAttribute('href', '#screen-c-1');
  });

  test('My Style Profile uses liked looks, silhouettes, palette, sources and canonical edit routes', async ({ page }) => {
    await page.goto('/index.html#screen-f-2');
    const screen = page.locator('#screen-f-2');
    await expect(screen.locator('.wp18-evidence img')).toHaveCount(3);
    await expect(screen.locator('.wp18-swatch')).toHaveCount(4);
    await expect(screen).toContainText('Silhouettes');
    await expect(screen).toContainText('Fit & texture tendencies');
    await expect(screen).toContainText('Inspiration Sources');
    await expect(screen.locator('a[href="#screen-h-9"]')).toHaveCount(3);
    await expect(screen.getByRole('button', { name: 'Refine Preferences' })).toBeVisible();
    await expect(screen.getByRole('link', { name: 'Add Inspiration' }).last()).toHaveAttribute('href', '#screen-y-12');
    await expect(screen.getByRole('link', { name: 'Edit Brand Fit' })).toHaveAttribute('href', '#screen-y-7');
    await expect(screen).not.toContainText(/\b\d{1,3}%\b/);
  });

  test('Preferences edit supports save and snapshot-restoring cancel', async ({ page }) => {
    await page.goto('/index.html#screen-f-3');
    const screen = page.locator('#screen-f-3');
    await screen.getByRole('button', { name: 'Edit', exact: true }).click();
    await screen.getByLabel('Tops').fill('L');
    await screen.getByRole('button', { name: 'Cancel' }).click();
    await expect(screen).toContainText('M');
    await screen.getByRole('button', { name: 'Edit', exact: true }).click();
    await screen.getByLabel('Tops').fill('L');
    await screen.getByRole('button', { name: 'Update Preferences' }).click();
    await expect(screen).toContainText('L');
  });

  test('2026-08 F-3/Y-7 regression binds Cancel directly to the F-3 origin', async ({ page }) => {
    await page.goto('/index.html#screen-f-3');
    await page.locator('#screen-f-3').getByRole('link', { name: 'Edit Brand Fit' }).click();
    await expect(page).toHaveURL(/#screen-y-7$/);
    await page.locator('#brand-fit-skip').click();
    await expect(page).toHaveURL(/#screen-f-3$/);
  });

  test('Closet Insights previews neutral behavior and routes to canonical Closet views', async ({ page }) => {
    await page.goto('/index.html#screen-f-4');
    const screen = page.locator('#screen-f-4');
    for (const [label, href] of [['Most Worn','#screen-c-7'],['Wear More Often','#screen-c-16'],['Cost Per Wear','#screen-c-18'],['Similar Pieces','#screen-c-19'],['Seasonal Audit','#screen-c-20']]) {
      await expect(screen.locator(`.wp18-child a[href="${href}"]`)).toContainText(label);
    }
    await expect(screen).not.toContainText(/readiness|\b\d{1,3}%\b/i);
  });

  test('History, Evolution and Wrapped remain three distinct visual records', async ({ page }) => {
    await page.goto('/index.html#screen-f-7');
    await expect(page.locator('#screen-f-7 .wp18-history img')).toHaveCount(4);
    await expect(page.locator('#screen-f-7')).not.toContainText(/\d(?:\.\d)?\s*\/\s*5/);
    await page.goto('/index.html#screen-f-8');
    await expect(page.locator('#screen-f-8 .wp18-compare img')).toHaveCount(6);
    await expect(page.locator('#screen-f-8')).toContainText('Earlier');
    await expect(page.locator('#screen-f-8')).toContainText('Now');
    await page.goto('/index.html#screen-f-9');
    await expect(page.locator('#screen-f-9 img')).toHaveCount(5);
    await expect(page.locator('#screen-f-9')).toContainText('Lowest Cost Per Wear');
    await expect(page.locator('#screen-f-9')).not.toContainText(/most stylish|style score/i);
  });

  test('Style Boards search and Studio-created boards share one visual hub', async ({ page }) => {
    await page.goto('/index.html#screen-f-10');
    await page.evaluate(() => {
      prototypeState.studio.savedBoards = [{ board:'Studio Capsule', look:'Work', visibility:'Private' }];
      renderWp18();
    });
    const screen = page.locator('#screen-f-10');
    await expect(screen.getByText('Studio Capsule', { exact: true })).toBeVisible();
    await page.evaluate(() => wp18SearchBoards('Winter'));
    await expect(screen.locator('.wp18-board')).toHaveCount(1);
    await expect(screen.getByText('Winter Travel', { exact: true })).toBeVisible();
    await page.evaluate(() => wp18SearchBoards('No match'));
    await expect(screen).toContainText('No matching boards');
    await expect(screen.getByRole('link', { name: 'Create in Style Studio' })).toHaveAttribute('href', '#screen-h-1');
  });

  test('board collaboration poll records one accessible local vote and returns to results', async ({ page }) => {
    await page.goto('/index.html#screen-f-10');
    await page.locator('#screen-f-10 .wp18-board').first().click();
    await expect(page).toHaveURL(/#screen-f-11$/);
    await page.locator('#screen-f-11').getByRole('link', { name: 'Active Poll' }).click();
    await page.locator('#screen-f-12').getByRole('link', { name: 'Participate' }).click();
    const optionB = page.locator('#screen-f-13').getByRole('radio', { name: /Option B/ });
    await optionB.click();
    await expect(optionB).toHaveAttribute('aria-checked', 'true');
    await page.locator('#screen-f-13').getByRole('button', { name: 'Submit Vote' }).click();
    await expect(page).toHaveURL(/#screen-f-12$/);
    await expect(page.locator('#screen-f-12')).toContainText('Your vote recorded');
    const votes = await page.evaluate(() => ({ ...prototypeState.vNext.wp18.poll.votes }));
    await page.locator('#screen-f-12').getByRole('link', { name: 'Review Your Vote' }).click();
    await expect(page.locator('#screen-f-13').getByRole('button', { name: 'Vote Submitted' })).toBeDisabled();
    expect(await page.evaluate(() => ({ ...prototypeState.vNext.wp18.poll.votes }))).toEqual(votes);
  });

  test('Settings preserves canonical Profile, Twin, budget and Wishlist links', async ({ page }) => {
    await page.goto('/index.html#screen-f-14');
    const screen = page.locator('#screen-f-14');
    for (const [label, href] of [['My Style Profile','#screen-f-2'],['Preferences & Sizes','#screen-f-3'],['Style Twin','#screen-y-3'],['Style Budget','#screen-e-3'],['Wishlist','#screen-g-8'],['Instagram & Pinterest','#screen-y-12']]) {
      await expect(screen.locator(`.wp18-child a[href="${href}"]`)).toContainText(label);
    }
    await expect(screen.getByLabel('Daily outfit reminder')).toBeChecked();
    await expect(screen.getByRole('button', { name: 'Delete Account' })).toBeVisible();
  });

  test('all active F screens stay visual and avoid horizontal phone overflow', async ({ page }) => {
    await page.goto('/index.html#screen-f-1');
    const audit = await page.evaluate(() => ['f-1','f-2','f-3','f-4','f-7','f-8','f-9','f-10','f-11','f-12','f-13','f-14'].map(suffix => {
      const screen = document.getElementById(`screen-${suffix}`);
      const phone = screen.querySelector('.phone') || screen.children[1];
      return { suffix, images: phone.querySelectorAll('img').length, overflow: phone.scrollWidth > phone.clientWidth };
    }));
    expect(audit.every(result => !result.overflow)).toBe(true);
    expect(audit.filter(result => result.images > 0).length).toBeGreaterThanOrEqual(10);
  });
});
