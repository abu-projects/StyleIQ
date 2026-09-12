const { test, expect } = require('@playwright/test');

const app = page => page.locator('#app');
const getCanonical = async page => await app(page).getAttribute('data-canonical-screen');
const getScreen = async page => await app(page).getAttribute('data-screen');

test.describe('StyleIQ Phase 2 Flow Reduction Architecture', () => {

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.clear();
    });
  });

  test('Flow 1: Account creation (S-01 -> A-16 inline Email/OTP -> A-02 in 2 steps)', async ({ page }) => {
    // Start at A-16
    await page.goto('/index.html#A-16');
    expect(await getCanonical(page)).toBe('A-16');

    // Tap "Continue with email" - expands inline email input without full-screen navigation
    await app(page).getByRole('button', { name: 'Continue with email' }).click();
    await expect(app(page).getByPlaceholder('name@email.com')).toBeVisible();
    expect(await getCanonical(page)).toBe('A-16'); // Still Step 1

    // Fill email and request code - renders inline OTP without route change
    await app(page).locator('#signup-first-name').fill('Alex');
    await app(page).locator('#signup-last-name').fill('Morgan');
    await app(page).getByPlaceholder('name@email.com').fill('alex@example.com');
    await app(page).getByRole('button', { name: 'Create Account' }).click();
    await expect(app(page).getByRole('button', { name: 'Verify email' })).toBeVisible();
    expect(await getCanonical(page)).toBe('A-16'); // Still Step 1

    // Fill 6 digits and verify OTP -> advances to A-02 (Step 2: Destination)
    for (const [index, digit] of [...'123456'].entries()) {
      await app(page).getByLabel(`Digit ${index + 1}`, { exact: true }).fill(digit);
    }
    await app(page).getByRole('button', { name: 'Verify email' }).click();
    await expect(app(page).locator('h1.display')).toContainText('Set up your StyleIQ');
    expect(await getCanonical(page)).toBe('A-02');
  });

  test('Flow 2: Returning sign-in (S-01 -> A-01 -> D-02 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#S-01');
    expect(await getCanonical(page)).toBe('S-01');

    // Navigate to A-01
    await page.goto('/index.html#A-01');
    expect(await getCanonical(page)).toBe('A-01');

    // Direct sign-in routes to D-02 Today
    await app(page).getByRole('button', { name: 'Sign in' }).first().click();
    expect(await getCanonical(page)).toBe('D-02');
  });

  test('Flow 3: First-use setup (A-02 consolidated setup in 1 step)', async ({ page }) => {
    await page.goto('/index.html#A-02');
    expect(await getCanonical(page)).toBe('A-02');

    // Select personalization without repeating account identity fields.
    await app(page).getByRole('button', { name: 'Get dressed faster' }).click();

    // Click "Start with StyleIQ" -> completes setup in 1 step
    await app(page).getByRole('button', { name: 'Start with StyleIQ' }).click();
    expect(['D-02', 'C-01']).toContain(await getCanonical(page));
  });

  test('A-16 owns identity while A-02 contains only wardrobe context and first goal', async ({ page }) => {
    await page.goto('/index.html#A-16');
    await app(page).getByRole('button', { name: 'Continue with email' }).click();
    await expect(app(page).getByLabel('First Name')).toBeVisible();
    await expect(app(page).getByLabel('Last Name')).toBeVisible();
    await expect(app(page).getByLabel('Email', { exact: true })).toBeVisible();

    await page.goto('/index.html#A-02');
    await expect(app(page).getByRole('group', { name: 'Wardrobe context' })).toBeVisible();
    await expect(app(page).getByText('What do you want StyleIQ to help with first?')).toBeVisible();
    await expect(app(page).getByLabel('First Name')).toHaveCount(0);
    await expect(app(page).getByLabel('Email', { exact: true })).toHaveCount(0);
    await expect(app(page).getByText(/Build your closet/i)).toHaveCount(0);
  });

  for (const [goal, destination] of [
    ['Get dressed faster', 'D-02'],
    ['Make more outfits from Closet', 'B-01'],
    ['Plan outfits', 'I-01'],
    ['Shop more intentionally', 'G-08'],
    ['Pack for a trip', 'J-02'],
  ]) {
    test(`A-02 routes the ${goal} goal to ${destination}`, async ({ page }) => {
      await page.goto('/index.html#A-02');
      await app(page).getByRole('button', { name: goal }).click();
      await app(page).getByRole('button', { name: 'Start with StyleIQ' }).click();
      expect(await getCanonical(page)).toBe(destination);
    });
  }

  test('Flow 4 & 5: Closet Intake & Review (B-01 -> B-06 -> C-01 in <= 2 steps)', async ({ page }) => {
    // Step 1: B-01 universal intake
    await page.goto('/index.html#B-01');
    expect(await getCanonical(page)).toBe('B-01');

    // Review first item directly -> Step 2: B-06 review
    await app(page).getByRole('button', { name: 'Review first item' }).click();
    expect(await getCanonical(page)).toBe('B-06');

    // Step 2 confirmation -> routes directly to C-01
    await app(page).getByRole('button', { name: /Looks right · Add|Confirm & Add/i }).click();
    expect(await getCanonical(page)).toBe('C-01');
  });

  test('Flow 6: Product search / URL import inside B-01 in <= 2 steps', async ({ page }) => {
    await page.goto('/index.html#B-01');
    await app(page).getByRole('button', { name: 'Search / URL' }).click();
    await expect(app(page).getByPlaceholder(/Balmain blazer/i)).toBeVisible();
    expect(await getCanonical(page)).toBe('B-01');

    // Clicking an inline search result proceeds to B-06 review
    await app(page).getByRole('button', { name: 'Add to My Closet' }).first().click();
    expect(await getCanonical(page)).toBe('B-06');
  });

  test('Flow 7: Closet Item Detail and direct Studio styling (C-01 -> C-02 -> F-01 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#C-01');
    expect(await getCanonical(page)).toBe('C-01');

    // Open item detail
    await app(page).locator('.closet-card, .closet-item').first().click();
    expect(await getCanonical(page)).toBe('C-02');

    // Tap Style It -> direct route to F-01 Studio canvas
    await app(page).getByRole('button', { name: /Style (It|this piece|this item)/i }).first().click();
    expect(await getCanonical(page)).toBe('F-01');
  });

  test('Flow 8 & 9: Daily Outfit and Outfit Actions (D-02 Today hub + changeLook sheet in 1 step)', async ({ page }) => {
    await page.goto('/index.html#D-02');
    expect(await getCanonical(page)).toBe('D-02');

    // Open lightweight changeLook bottom sheet
    await page.evaluate(() => window.openLightweightPanel('changeLook'));
    await expect(app(page).locator('.lightweight-sheet')).toBeVisible();
    expect(await getCanonical(page)).toBe('D-02'); // Preserved 1 step
  });

  test('Flow 10: Style Studio & Canvas (F-01 single-screen workspace with drawer in 1 step)', async ({ page }) => {
    await page.goto('/index.html#F-01');
    expect(await getCanonical(page)).toBe('F-01');
    await expect(app(page).locator('.studio-start-grid, .studio-canvas')).toBeVisible();
  });

  test('Flow 11: Saved Looks (G-01 -> G-02 in <= 2 steps)', async ({ page }) => {
    await page.goto('/index.html#G-01');
    expect(await getCanonical(page)).toBe('G-01');

    // Tap saved look
    await app(page).locator('.item-card, .saved-look-card, .look-card').first().click();
    expect(await getCanonical(page)).toBe('G-02');
  });

  test('Flow 12: Wishlist (G-08 -> G-09 in <= 2 steps)', async ({ page }) => {
    await page.goto('/index.html#G-08');
    expect(await getCanonical(page)).toBe('G-08');

    // Click product in Wishlist -> opens G-09 Before You Buy
    await app(page).locator('.wishlist-product-name, .wishlist-product-image').first().click();
    expect(await getCanonical(page)).toBe('G-09');
    await expect(app(page).getByRole('heading', { name: /Before You Buy/i }).first()).toBeVisible();
  });

  test('Flow 13: Style Twin Creation (Approved Exception 1: H-01 -> H-06 -> H-10 in exactly 3 steps)', async ({ page }) => {
    // Start with customer=new so twin is not already complete
    await page.goto('/index.html?customer=new#H-01');
    expect(await getCanonical(page)).toBe('H-01');

    // Continue to details -> Step 2: H-06
    await app(page).getByRole('button', { name: /Continue to details|Use this reference/i }).click();
    expect(await getCanonical(page)).toBe('H-06');

    // Complete setup -> Step 3: H-10 Result
    await app(page).getByRole('button', { name: /Create Style Twin|Create first preview/i }).click();
    expect(await getCanonical(page)).toBe('H-10');
    await expect(app(page).locator('h2.title')).toContainText(/Your Style Twin is ready/i);
  });

  test('Flow 14: Try On preserves originating outfit context directly on H-10 in 1 step', async ({ page }) => {
    await page.goto('/index.html#H-10');
    expect(await getCanonical(page)).toBe('H-10');
    await expect(app(page).locator('.twin-editorial-visual, .twin-preview, .studio-live-preview')).toBeVisible();
  });

  test('Flow 15: Planner Event (I-01 -> I-04 -> I-01 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#I-01');
    expect(await getCanonical(page)).toBe('I-01');

    // Open composer
    await page.goto('/index.html#I-04');
    expect(await getCanonical(page)).toBe('I-04');

    // Submit plan look -> returns to I-01
    await app(page).getByRole('button', { name: 'Plan My Look' }).click();
    expect(await getCanonical(page)).toBe('I-01');
  });

  test('Flow 16: Trip Planning (Approved Exception 2: J-01 -> J-02 -> J-08 in 3 steps from list, 2 steps contextual)', async ({ page }) => {
    // From list (3 steps)
    await page.goto('/index.html#J-01');
    expect(await getCanonical(page)).toBe('J-01');

    // Plan new trip -> J-02
    await page.goto('/index.html#J-02');
    expect(await getCanonical(page)).toBe('J-02');

    // Submit trip -> J-08 Trip Hub
    await app(page).getByRole('button', { name: 'Generate Trip Wardrobe' }).click();
    await expect(app(page)).toHaveAttribute('data-canonical-screen', 'J-08', { timeout: 7000 });
    await expect(app(page).locator('.trip-tabs')).toBeVisible();
  });

  test('Flow 17: Stylist Experience & Make It Mine (Approved Exception 3: H-11 -> H-13 -> F-01 in 3 steps)', async ({ page }) => {
    // Step 1: H-11 Stylist Discovery
    await page.goto('/index.html#H-11');
    expect(await getCanonical(page)).toBe('H-11');

    // Step 2: Open look directly from feed -> H-13
    await app(page).locator('.creator-look-card, .creator-mini-thumb, button:has-text("View Look")').first().click();
    expect(await getCanonical(page)).toBe('H-13');

    // Step 3: "Make It Mine" -> opens directly in Studio canvas F-01
    await app(page).getByRole('button', { name: 'Make It Mine' }).first().click();
    expect(await getCanonical(page)).toBe('F-01');
  });

  test('Flow 18: Inspiration / Community (K-01 -> K-04 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#K-01');
    expect(await getCanonical(page)).toBe('K-01');

    // Open community look -> K-04
    await app(page).locator('.mirror-section:not(.creator-insp-module) .mirror-outfit-card').first().click();
    expect(await getCanonical(page)).toBe('K-04');
  });

  test('Flow 19: Profile and Preferences (L-01 -> L-04 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#L-01');
    expect(await getCanonical(page)).toBe('L-01');

    await page.goto('/index.html#L-04');
    expect(await getCanonical(page)).toBe('L-04');
    await expect(app(page).getByRole('heading', { name: /Profile & Style Preferences/i }).first()).toBeVisible();
  });

  test('L-04 owns coherent profile preferences and excludes budget and recurring events', async ({ page }) => {
    await page.goto('/index.html#L-04');
    for (const section of ['About you', 'Style preferences', 'Brands & Fit', 'Style Inspiration']) {
      await expect(app(page).getByText(section, { exact: true }).first()).toBeVisible();
    }
    await expect(app(page).getByText('Shopping budget', { exact: true })).toHaveCount(0);
    await expect(app(page).getByText('Recurring events', { exact: true })).toHaveCount(0);
  });

  test('Flow 20: Settings (L-01 -> L-11 in 2 steps)', async ({ page }) => {
    await page.goto('/index.html#L-01');
    expect(await getCanonical(page)).toBe('L-01');

    await page.goto('/index.html#L-11');
    expect(await getCanonical(page)).toBe('L-11');
    await expect(app(page).getByRole('heading', { name: 'Settings' }).first()).toBeVisible();
  });

  test('Flow 21: Ask Muse contextual overlay in 1 step from any surface', async ({ page }) => {
    await page.goto('/index.html#D-02');
    await page.evaluate(() => window.openLightweightPanel('tripMuse'));
    await expect(app(page).locator('.lightweight-sheet')).toBeVisible();
    expect(await getCanonical(page)).toBe('D-02');
  });

  test('Compatibility: Legacy deep-links resolve seamlessly to canonical destinations with state', async ({ page }) => {
    // #B-04 resolves to canonical B-01 in search mode
    await page.goto('/index.html#B-04');
    expect(await getCanonical(page)).toBe('B-01');
    expect(await getScreen(page)).toBe('B-04');

    // #B-07 resolves to canonical B-06 with recovery state
    await page.goto('/index.html#B-07');
    expect(await getCanonical(page)).toBe('B-06');
    expect(await getScreen(page)).toBe('B-07');

    // #J-03 resolves to canonical J-02
    await page.goto('/index.html#J-03');
    expect(await getCanonical(page)).toBe('J-02');

    // #J-09 resolves to canonical J-08
    await page.goto('/index.html#J-09');
    expect(await getCanonical(page)).toBe('J-08');

    // #L-05 resolves to canonical L-04
    await page.goto('/index.html#L-05');
    expect(await getCanonical(page)).toBe('L-04');
  });

  test('Phase 2 compatibility routes open their canonical owner and intended state', async ({ page }) => {
    const cases = [
      ['A-06', 'B-01', 'Choose garment photos'],
      ['I-02', 'I-01', 'Planner Insights'],
      ['I-03', 'I-01', 'Planned looks & events'],
      ['I-06', 'I-01', 'Share Planner'],
      ['L-07', 'G-08', 'Shopping budget'],
      ['L-08', 'I-01', 'Recurring events'],
    ];
    for (const [legacy, canonical, visibleText] of cases) {
      await page.goto(`/index.html#${legacy}`);
      expect(await getCanonical(page)).toBe(canonical);
      expect(await getScreen(page)).toBe(legacy);
      await expect(app(page).getByText(visibleText, { exact: true }).first()).toBeVisible();
    }
  });

  test('Visible inventory contains only the 34 canonical screens', async ({ page }) => {
    await page.goto('/index.html#D-02');
    const ids = await page.locator('#screen-list [data-id]').evaluateAll(links =>
      links.map(link => link.dataset.id)
    );
    expect(ids).toEqual([
      'S-00', 'S-01',
      'A-01', 'A-02', 'A-16',
      'B-01', 'B-06',
      'C-01', 'C-02',
      'D-02',
      'F-01',
      'G-01', 'G-02', 'G-08', 'G-09',
      'H-01', 'H-06', 'H-10', 'H-11', 'H-12', 'H-13',
      'I-01', 'I-04',
      'J-01', 'J-02', 'J-08',
      'K-01', 'K-04',
      'L-01', 'L-04', 'L-11', 'L-12', 'L-14',
      'M-01',
    ]);
    await expect(page.locator('#total-count')).toHaveText('34 / 34');
    await expect(page.locator('#screen-list')).not.toContainText('OUTFIT ACTIONS');
    const counts = await page.evaluate(() => ({
      visible: screens.length,
      compatibility: routeScreens.length - screens.length,
      supported: routeScreens.length,
    }));
    expect(counts).toEqual({ visible: 34, compatibility: 93, supported: 127 });
  });

});
