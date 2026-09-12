const { test, expect } = require('@playwright/test');

const app = page => page.locator('#app');
const product = (page, id) => page.locator(`[data-product-id="${id}"]`);
const heart = (page, id) => page.locator(`[data-wishlist-heart="${id}"]`);
const route = async (page, id) => {
  await page.goto(`/index.html#${id}`);
  await expect(app(page)).toHaveAttribute('data-screen', id);
};
const filter = (page, name) => page.locator("#app").getByRole('group', { name: 'Wishlist status' }).getByRole('button', { name, exact: true });

test('product save, removal and Undo stay synchronized across Discover and Wishlist after reload', async ({ page }) => {
  await route(page, 'K-02');
  await heart(page, 'shoulder-bag').click();
  await expect(app(page)).toHaveAttribute('data-screen', 'K-02');
  await expect(heart(page, 'shoulder-bag')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('status')).toContainText('Saved to Wishlist.');
  await page.reload();
  await heart(page, 'shoulder-bag').click();
  await page.locator("#app").getByRole('dialog', { name: 'Wishlist options' }).getByRole('button', { name: 'View in Wishlist' }).click();
  await expect(app(page)).toHaveAttribute('data-screen', 'G-09');
  await app(page).getByRole('button', { name: 'Remove from Wishlist', exact: true }).click();
  await page.locator("#app").getByRole('alertdialog').getByRole('button', { name: 'Cancel', exact: true }).click();
  await expect(heart(page, 'shoulder-bag')).toHaveAttribute('aria-pressed', 'true');
  await app(page).getByRole('button', { name: 'Remove from Wishlist', exact: true }).click();
  await page.locator("#app").getByRole('alertdialog').getByRole('button', { name: 'Remove product' }).click();
  await expect(app(page)).toHaveAttribute('data-screen', 'G-08');
  await expect(product(page, 'shoulder-bag')).toHaveCount(0);
  await page.getByRole('button', { name: 'Undo', exact: true }).click();
  await expect(product(page, 'shoulder-bag')).toBeVisible();
  await product(page, 'shoulder-bag').getByRole('button', { name: 'View Leather Shoulder Bag', exact: true }).click();
  await app(page).getByRole('button', { name: 'Remove from Wishlist', exact: true }).click();
  await page.locator("#app").getByRole('alertdialog').getByRole('button', { name: 'Remove product' }).click();
  await route(page, 'K-02');
  await expect(heart(page, 'shoulder-bag')).toHaveAttribute('aria-pressed', 'false');
});

test('purchase requires confirmation and the shared item review before one persistent Closet item is created', async ({ page }) => {
  await route(page, 'G-08');
  await product(page, 'leather-loafers').getByRole('button', { name: 'View Leather Loafers', exact: true }).click();
  await app(page).getByRole('button', { name: 'Mark as Purchased', exact: true }).click();
  await page.locator("#app").getByRole('alertdialog').getByRole('button', { name: 'Cancel', exact: true }).click();
  await expect(app(page).getByRole('button', { name: 'Mark as Purchased', exact: true })).toBeVisible();
  await app(page).getByRole('button', { name: 'Mark as Purchased', exact: true }).click();
  await page.locator("#app").getByRole('button', { name: 'Confirm & review for Closet' }).click();
  await expect(app(page)).toHaveAttribute('data-screen', 'B-06');
  await expect(page.locator("#app").getByLabel('Item name', { exact: true })).toHaveValue('Leather Loafers');
  await expect(page.locator("#app").getByLabel('Brand', { exact: true })).toHaveValue('Vagabond');
  await expect(page.locator("#app").getByLabel('Purchase price', { exact: true })).toHaveValue('214');
  await page.reload();
  await expect(page.locator("#app").getByLabel('Item name', { exact: true })).toHaveValue('Leather Loafers');
  await page.locator("#app").getByRole('button', { name: 'Keep purchased · add later' }).click();
  await route(page, 'C-01');
  await expect(page.locator('.closet-item-copy b').filter({ hasText: /^Leather Loafers$/ })).toHaveCount(0);
  await route(page, 'G-09');
  await app(page).getByRole('button', { name: 'Prepare for Closet' }).click();
  await page.locator("#app").getByLabel('Item name', { exact: true }).fill('My work loafers');
  await page.locator("#app").getByLabel('Purchase price', { exact: true }).fill('205');
  await page.locator("#app").getByRole('button', { name: 'Looks right · Add' }).click();
  await expect(app(page)).toHaveAttribute('data-screen', 'C-02');
  await expect(app(page).getByRole('heading', { name: 'My work loafers', exact: true })).toBeVisible();
  await expect(app(page).getByText('$205.00', { exact: true })).toBeVisible();
  await page.reload();
  await expect(app(page).getByRole('heading', { name: 'My work loafers', exact: true })).toBeVisible();
  await route(page, 'G-09');
  await app(page).getByRole('button', { name: 'View Closet Item' }).click();
  await expect(app(page).getByRole('heading', { name: 'My work loafers', exact: true })).toBeVisible();
  await route(page, 'C-01');
  await expect(page.locator('.closet-item-copy b').filter({ hasText: /^My work loafers$/ })).toHaveCount(1);
  await expect(page.locator('.closet-item [data-wishlist-heart]')).toHaveCount(0);
});

test('saved context, status filters and unavailable actions survive reload without becoming owned', async ({ page }) => {
  await route(page, 'G-08');
  await filter(page, 'Unavailable').click();
  await expect(page.locator('.wishlist-product')).toHaveCount(1);
  await product(page, 'ivory-knit').getByRole('button', { name: 'View Ivory Silk Shell', exact: true }).click();
  await expect(app(page).getByRole('button', { name: 'Mark as Purchased', exact: true })).toHaveCount(0);
  await expect(app(page).getByText('Budget context', { exact: true })).toHaveCount(0);
  await app(page).getByRole('button', { name: 'Move Collection', exact: true }).click();
  const dialog = page.locator("#app").getByRole('dialog', { name: 'Saved context', exact: true });
  await dialog.getByLabel('Collection', { exact: true }).selectOption('Travel');
  await dialog.getByLabel('Why do you like this?', { exact: true }).fill('A layer for travel <not a new outfit>.');
  await dialog.getByLabel('Review reminder', { exact: true }).selectOption({ label: 'Review before next season' });
  await dialog.getByRole('button', { name: 'Save to Wishlist', exact: true }).click();
  await page.reload();
  await expect(page.locator('.wishlist-context')).toContainText('A layer for travel <not a new outfit>.');
  await expect(page.locator('.wishlist-context')).toContainText('Travel');
  await route(page, 'G-08');
  for (const [name, count] of [['Saved', 1], ['Review Later', 1], ['Ready to Buy', 1], ['Purchased', 0], ['Unavailable', 1], ['All', 4]]) {
    await filter(page, name).click();
    await expect(page.locator('.wishlist-product')).toHaveCount(count);
  }
});

test('outfit evaluation keeps the considered product separate from three owned pieces and Saved Looks', async ({ page }) => {
  await route(page, 'G-08');
  await product(page, 'leather-loafers').getByRole('button', { name: 'View Leather Loafers', exact: true }).click();
  await app(page).getByRole('button', { name: 'Compare Similar', exact: true }).click();
  await expect(page.locator("#app").getByRole('dialog')).toContainText('Tan suede loafers');
  await page.locator("#app").getByRole('button', { name: 'Close Wishlist dialog' }).click();
  await app(page).getByRole('button', { name: 'Explore Outfit Ideas', exact: true }).click();
  await expect(page.locator("#app").getByRole('dialog')).toContainText('3 owned pieces + 1 considered product');
  await page.locator("#app").getByRole('button', { name: 'Explore in Style Studio' }).click();
  await expect(app(page)).toHaveAttribute('data-screen', 'F-01');
  await page.locator('[data-testid="studio-edit-look-details"]').click();
  await page.locator('.studio-save').click();
  await expect(app(page)).toHaveAttribute('data-screen', 'G-02');
  await expect(app(page).getByRole('heading', { name: 'Saved Look', exact: true })).toBeVisible();
  await app(page).getByRole('tab',{name:'Items',exact:true}).click();
  await expect(page.locator('.pack-row')).toHaveCount(4);
  await expect(page.locator('.pack-row [data-wishlist-heart]')).toHaveCount(1);
  await route(page, 'G-08');
  await expect(page.locator('.wishlist-product')).toHaveCount(4);
});

test('Lens and gap products share heart state while the owned Studio source has no Wishlist hearts', async ({ page }) => {
  await route(page, 'K-01');
  await page.locator("#app").getByRole('button', { name: 'Open StyleIQ Lens', exact: true }).click();
  await page.locator("#app").getByRole('button', { name: 'Photo library', exact: true }).click();
  await page.locator("#app").getByRole('button', { name: /Should I buy this/ }).click();
  await page.locator('.lens-sheet').getByRole('button', {name:'View Wishlist',exact:true}).click();
  await product(page,'rust-knit').getByRole('button',{name:/^View /}).click();
  await app(page).getByRole('button',{name:'Remove from Wishlist',exact:true}).click();
  await app(page).getByRole('alertdialog').getByRole('button',{name:'Remove product'}).click();
  await route(page, 'M-03');
  await expect(heart(page, 'rust-knit')).toHaveAttribute('aria-pressed', 'false');
  await route(page, 'F-01');
  await page.locator('[data-testid="studio-edit-look-details"]').click();
  await page.locator("#app").getByRole('group', { name: 'Piece source', exact: true }).getByRole('button', { name: 'My Closet', exact: true }).click();
  await expect(page.locator('.studio-picker [data-wishlist-heart]')).toHaveCount(0);
});

test('every entry opens the canonical Wishlist while primary navigation stays at five destinations', async ({ page }) => {
  for (const id of ['D-02', 'K-01', 'L-01']) {
    await route(page, id);
    await expect(page.locator("#app").getByRole('navigation', { name: 'Primary navigation' }).getByRole('button')).toHaveCount(5);
    const entry = id === 'L-01' ? page.locator('.profile-utility').filter({ hasText: 'Wishlist' }) : app(page).getByRole('button', { name: 'View Wishlist', exact: true });
    await entry.click();
    await expect(app(page)).toHaveAttribute('data-screen', 'G-08');
  }
  await app(page).getByRole('button', { name: 'Open More menu' }).click();
  const menu = page.locator("#app").getByRole('complementary', { name: 'Account navigation' });
  await expect(menu.getByRole('button', { name: 'Saved Looks', exact: false })).toBeVisible();
  await menu.getByRole('button', { name: /Wishlist/ }).click();
  await expect(menu).toHaveCount(0);
  await expect(app(page)).toHaveAttribute('data-screen', 'G-08');
});

test('the visible canonical inventory renders without overflow or runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await route(page, 'G-08');
  const { failures, checkedCount } = await page.evaluate(() => {
    const allIds = [...document.querySelectorAll('#screen-list [data-id]')].map(n => n.dataset.id);
    const failures = [];
    const appEl = document.getElementById('app');
    for (const id of allIds) {
      go(id);
      const screen = appEl.getAttribute('data-screen');
      const canonical = appEl.getAttribute('data-canonical-screen');
      const expectedCanonical = getCanonicalScreen(id);
      if (screen !== id) {
        failures.push({ id, error: `data-screen ${screen} !== ${id}` });
      }
      if (canonical !== expectedCanonical) {
        failures.push({ id, error: `data-canonical-screen ${canonical} !== ${expectedCanonical}` });
      }
      const overflow = appEl.scrollWidth > appEl.clientWidth + 1;
      if (overflow) {
        failures.push({ id, overflow });
      }
    }
    return { failures, checkedCount: allIds.length };
  });
  expect(checkedCount).toBe(34);
  expect(failures).toEqual([]);
  expect(errors).toEqual([]);
});
