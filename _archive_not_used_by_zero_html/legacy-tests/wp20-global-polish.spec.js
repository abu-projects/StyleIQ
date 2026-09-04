const { test, expect } = require('@playwright/test');

const PRIMARY = [
  ['screen-a-1', 'Today'],
  ['screen-c-1', 'Closet'],
  ['screen-d-1', 'Planner'],
  ['screen-g-1', 'Discover'],
  ['screen-f-1', 'My Style Profile']
];
const NAV = ['Today', 'Closet', 'Planner', 'Discover', 'Profile'];

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
  await page.waitForFunction(() => window.StyleIQWp20Audit?.screenCount === 101);
});

test('canonical audit classifies all screens without changing the route contract', async ({ page }) => {
  const audit = await page.evaluate(() => window.StyleIQWp20Audit);
  expect(audit.screenCount).toBe(101);
  expect(audit.changedCount).toBe(22);
  expect(audit.verifiedUnchangedCount).toBe(79);
  expect(Object.values(audit.classes)).toContain('primary');
  expect(Object.values(audit.classes)).toContain('form/configuration');
  expect(Object.values(audit.classes)).toContain('utility');
  expect(Object.values(audit.classes)).toContain('legacy compatibility');
});

test('five primary screens lead with visual value and the canonical navigation', async ({ page }) => {
  for (const [id, title] of PRIMARY) {
    const screen = page.locator(`#${id}`);
    await expect(screen).toContainText(title);
    await expect(screen.locator('img').first()).toBeVisible();
    await expect(screen.locator('.bottom-nav')).toHaveCount(1);
    expect(await screen.locator('.bottom-nav a').allTextContents()).toEqual(NAV);
  }
});

test('normal user-facing content removes legacy judgment and taxonomy terms', async ({ page }) => {
  const violations = await page.evaluate(() => {
    const banned = /Style Score|Closet Readiness|Style DNA|Style Identity|Style Intelligence|Elevated Minimalist|Quiet Luxury Minimalist|Camel Composer|wardrobe score|versatility score|sustainability score/i;
    return [...document.querySelectorAll('[id^="screen-"] .phone *')]
      .filter(element => element.children.length === 0 && !element.closest('.sr-only,[hidden],[inert]'))
      .filter(element => element.getClientRects().length && banned.test(element.textContent || ''))
      .map(element => `${element.closest('[id^="screen-"]')?.id}: ${element.textContent.trim()}`);
  });
  expect(violations).toEqual([]);
  await expect(page.locator('#screen-f-1 .phone')).toContainText('My Style Profile');
  await expect(page.locator('#screen-c-13')).toContainText('Closet Insights');
});

test('ownership language and shared actions remain consistent after live rendering', async ({ page }) => {
  await page.evaluate(() => {
    prototypeState.closet.items = [{ id: 'wp20-blazer', name: 'Camel Blazer', category: 'Outerwear', image: 'images/item_blazer.png' }];
    window.renderWp14CreatorRecreate?.();
    window.runWp20Audit();
  });
  const match = page.locator('#screen-h-14 .phone');
  await expect(match).toContainText('Similar Owned');
  await expect(match).not.toContainText('Owned Match');
  await expect(match).toContainText('Make From My Closet');
  await expect(page.locator('#screen-a-1')).toContainText('Make From My Closet');
  await expect(page.locator('#screen-g-10')).toContainText('Make From My Closet');
});

test('previously static configuration controls now expose observable selection feedback', async ({ page }) => {
  const presentation = page.locator('#screen-y-6 fieldset').filter({ hasText: 'Avatar presentation' });
  await presentation.getByRole('button', { name: 'Neutral' }).click();
  await expect(presentation.getByRole('button', { name: 'Neutral' })).toHaveAttribute('aria-pressed', 'true');
  await expect(presentation.getByRole('button', { name: 'Feminine' })).toHaveAttribute('aria-pressed', 'false');

  await page.locator('#screen-y-14 [data-scene="Evening"]').click();
  await expect(page.locator('#screen-y-14 [data-scene="Evening"]')).toHaveAttribute('aria-pressed', 'true');

  await page.locator('#screen-c-15 [aria-label="Occasion"]').getByRole('button', { name: 'Travel' }).click();
  await expect(page.locator('#screen-c-15 [aria-label="Occasion"]').getByRole('button', { name: 'Travel' })).toHaveAttribute('aria-pressed', 'true');
});

test('zero Closet and no Twin remain useful first-class states', async ({ page }) => {
  await page.evaluate(() => {
    prototypeState.closet.items = [];
    prototypeState.styleTwinStatus = 'Not started';
    prototypeState.vNext.styleTwinMode = 'none';
    window.renderWp16Closet?.();
    window.renderWp12Today?.();
    window.runWp20Audit();
  });
  await expect(page.locator('#screen-a-1 img').first()).toBeVisible();
  await expect(page.locator('#screen-c-1')).toContainText('Outfit Inspiration');
  await expect(page.locator('#screen-c-1')).toContainText('Add Item');
  const tryOn = page.locator('#screen-a-1').getByText('Try On', { exact: true });
  await expect(tryOn).toBeVisible();
  await tryOn.click();
  await expect(page).toHaveURL(/#screen-y-3$/);
});

test('canonical targets, IDs, assets, and accessible image descriptions are intact', async ({ page }) => {
  const audit = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
    const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    const targets = [...document.querySelectorAll('a[href^="#"], [data-target]')].map(element => (element.getAttribute('href') || element.dataset.target || '').replace(/^#/, '')).filter(Boolean);
    return {
      duplicates,
      unresolved: [...new Set(targets.filter(target => !document.getElementById(target)))],
      broken: [...document.images].filter(image => !image.complete || !image.naturalWidth).map(image => image.src),
      missingAlt: [...document.images].filter(image => !image.hasAttribute('alt')).length
    };
  });
  expect(audit).toEqual({ duplicates: [], unresolved: [], broken: [], missingAlt: 0 });
});

test('all canonical phone canvases avoid accidental horizontal overflow on narrow mobile', async ({ page }) => {
  for (const viewport of [{ width: 375, height: 812 }, { width: 360, height: 800 }]) {
    await page.setViewportSize(viewport);
    const overflow = await page.evaluate(() => [...document.querySelectorAll('[id^="screen-"]')].filter(screen => {
      const phone = screen.matches('.phone') ? screen : screen.querySelector('.phone');
      return phone && phone.scrollWidth > phone.clientWidth + 1;
    }).map(screen => screen.id));
    expect(overflow).toEqual([]);
  }
});

test('critical mobile controls have focus treatment and comfortable hit areas', async ({ page }) => {
  const controls = page.locator('#screen-a-1 .bottom-nav a, #screen-y-2 .wp19-reaction, #screen-f-1 .wp18-icon-button');
  const sizes = await controls.evaluateAll(elements => elements.map(element => {
    const rect = element.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }));
  expect(sizes.every(size => size.width >= 40 && size.height >= 40)).toBe(true);
  const settings = page.locator('#screen-f-1 .wp18-icon-button').first();
  await settings.focus();
  expect(await settings.evaluate(element => getComputedStyle(element).outlineStyle)).not.toBe('none');
});
