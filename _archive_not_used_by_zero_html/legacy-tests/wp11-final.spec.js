const { test, expect } = require('@playwright/test');

test('WP-11 source has canonical routes, metadata, and structural invariants', async ({ request }) => {
  const source = await (await request.get('/index.html')).text();
  for (const legacy of [
    'data-master-only',
    'index - Session 3 Draft.html',
    'Opens the complete Session 3 master prototype',
    'Style Score',
    'Closet Readiness',
    'Style DNA'
  ]) expect(source, `${legacy} must not remain`).not.toContain(legacy);

  const ids = [...source.matchAll(/\bid=["'](screen-[^"']+)["']/g)].map(match => match[1]);
  const idSet = new Set(ids);
  const screenHrefs = [...source.matchAll(/href=["'](#screen-[^"']+)["']/g)].map(match => match[1]);
  expect(ids).toHaveLength(101);
  expect(idSet.size).toBe(101);
  expect(ids.filter(id => id.startsWith('screen-h-'))).toHaveLength(17);
  expect(screenHrefs.filter(href => !idSet.has(href.slice(1)))).toEqual([]);
  expect(screenHrefs.filter(href => ['#screen-f-5', '#screen-f-6'].includes(href))).toEqual([]);
  expect(source).toContain('<title>StyleIQ — vNext Master Prototype</title>');
  expect(source).toContain('vNext-wp00-wp01-wp02-wp03-wp04-wp05-wp06-wp07-wp08-wp09-wp10-wp11');
});

test('complex runtime screens use neutral, non-contradictory fallback mounts', async ({ request, page }) => {
  const source = await (await request.get('/index.html')).text();
  for (const [id, label] of [
    ['b-1', 'Saved Looks'],
    ['b-2', 'Saved Look Detail'],
    ['d-3', 'Planned Look Detail'],
    ['e-2', 'Style Budget'],
    ['g-8', 'Wishlist']
  ]) {
    const mount = new RegExp(`id=["']screen-${id}["'][^>]*>[\\s\\S]{0,300}<div class=["']phone["'][^>]*><\\/div>`);
    expect(source, `${label} should have a neutral renderer mount`).toMatch(mount);
  }

  await page.goto('/index.html#screen-b-1');
  await expect(page.locator('#screen-b-1')).toContainText('Saved Looks');
  await page.goto('/index.html#screen-d-3');
  await expect(page.locator('#screen-d-3')).toContainText('Planned Look');
  await page.goto('/index.html#screen-e-2');
  await expect(page.locator('#screen-e-2')).toContainText('Style Budget');
  await page.goto('/index.html#screen-g-8');
  await expect(page.locator('#screen-g-8')).toContainText('Wishlist');
});

test('F-1 canonical destinations replace retired and mismatched routes', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => {
    loadReturningUserDemo();
    window.renderProfile();
  });
  const profile = page.locator('#screen-f-1');
  await expect(profile.getByText('Style Score', { exact: true })).toHaveCount(0);
  await expect(profile.locator('a', { hasText: 'Outfit History' })).toHaveAttribute('href', '#screen-f-7');
  await expect(profile.locator('a', { hasText: 'Style Evolution' })).toHaveAttribute('href', '#screen-f-8');
  await expect(profile.locator('a[href="#screen-f-5"], a[href="#screen-f-6"]')).toHaveCount(0);
});

for (const [retired, destination] of [['f-5', 'f-4'], ['f-6', 'f-2']]) {
  test(`direct ${retired.toUpperCase()} hash redirects to ${destination.toUpperCase()}`, async ({ page }) => {
    await page.goto(`/index.html#screen-${retired}`);
    await expect(page).toHaveURL(new RegExp(`#screen-${destination}$`));
    await expect(page.locator(`#screen-${retired}`)).toBeHidden();
  });
}

test('Saved Looks selection and Planner handoff retain the selected look', async ({ page }) => {
  await page.goto('/index.html#screen-b-1');
  await page.locator('#screen-b-1').getByText('Dinner', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-b-2$/);
  await expect(page.locator('#screen-b-2')).toContainText('Dinner');
  await page.locator('#screen-b-2').getByRole('button', { name: 'Add to Planner' }).click();
  await page.getByRole('button', { name: 'Add to Planner', exact: true }).last().click();
  await expect(page).toHaveURL(/#screen-d-1$/);
  await page.locator('#screen-d-1').getByText('Dinner', { exact: true }).last().click();
  await expect(page.locator('#screen-d-3')).toContainText('Dinner');
});

test('every primary bottom nav is local and keeps exactly five destinations with More', async ({ page }) => {
  await page.goto('/index.html#screen-a-1');
  const result = await page.locator('.bottom-nav[aria-label="Primary"]').evaluateAll(navs => navs.map(nav =>
    [...nav.querySelectorAll(':scope > a')].map(link => ({ label: link.textContent.trim(), href: link.getAttribute('href') }))
  ));
  const expected = [
    ['Today', '#screen-a-1'],
    ['Closet', '#screen-c-1'],
    ['Planner', '#screen-d-1'],
    ['Discover', '#screen-g-1'],
    ['More', '#styleiq-more']
  ];
  for (const nav of result) {
    expect(nav).toHaveLength(5);
    expect(nav.map(item => [item.label, item.href])).toEqual(expected);
  }
});

test('final runtime terminology and core routes remain connected', async ({ page }) => {
  await page.goto('/index.html#screen-g-1');
  await page.locator('#screen-g-1').getByText('Explore Creators', { exact: true }).click();
  await expect(page).toHaveURL(/#screen-h-9$/);
  await page.goto('/index.html#screen-h-13');
  await expect(page.getByRole('button', { name: 'Save Inspiration', exact: true })).toHaveCount(1);
  await expect(page.locator('#screen-h-13')).toContainText('Style Patterns & Recipes');
  await page.locator('#screen-h-13').getByText('Recreate With My Closet', { exact: true }).click();
  await page.locator('#screen-h-14').getByRole('button', { name: 'Build This Version' }).click();
  await expect(page).toHaveURL(/#screen-h-4$/);
});

test('Y architecture remains two-step required onboarding with separate optional flows', async ({ page }) => {
  await page.goto('/index.html#screen-y-1');
  await expect(page.locator('#screen-y-1')).toContainText('1 of 2');
  await expect(page.locator('#screen-y-2')).toContainText('2 of 2');
  await expect(page.locator('#screen-y-3')).toContainText('Style Twin');
  await expect(page.locator('#screen-y-7')).toContainText('Profile edit');
  await expect(page.locator('#screen-y-10')).toContainText('Profile edit');
  await expect(page.locator('#screen-y-11')).toContainText('VISUAL STYLE LEARNING');
  await expect(page.locator('#screen-y-12')).toContainText('Style Intelligence');
  await expect(page.locator('body')).not.toContainText(/\b[1-9] of 9\b/);
});

test('final app loads without application console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error' && !/cdn|font|network|ERR_/i.test(message.text())) errors.push(message.text());
  });
  await page.goto('/index.html#screen-f-1');
  await page.goto('/index.html#screen-g-8');
  await page.goto('/index.html#screen-h-15');
  expect(errors).toEqual([]);
});
