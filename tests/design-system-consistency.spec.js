const { test, expect } = require('@playwright/test');

const CANONICAL_SCREENS = [
  'S-00', 'S-01', 'A-01', 'A-02', 'A-16', 'B-01', 'B-06', 'C-01', 'C-02',
  'D-02', 'F-01', 'G-01', 'G-02', 'G-08', 'G-09', 'H-01', 'H-06', 'H-10',
  'H-11', 'H-12', 'H-13', 'I-01', 'I-04', 'J-01', 'J-02', 'J-08', 'K-01',
  'K-04', 'L-01', 'L-04', 'L-11', 'L-12', 'L-14', 'M-01'
];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

test('the visible inventory remains exactly 34 canonical screens', async ({ page }) => {
  await page.goto('/index.html#D-02');
  const ids = await page.locator('#screen-list [data-id]').evaluateAll(nodes => nodes.map(node => node.dataset.id));
  expect(ids).toEqual(CANONICAL_SCREENS);
  expect(new Set(ids).size).toBe(34);
  await expect(page.locator('#total-count')).toHaveText('34 / 34');
});

test('canonical controls use the shared field, select and button systems', async ({ page }) => {
  const failures = [];
  for (const id of CANONICAL_SCREENS) {
    await page.goto(`/index.html#${id}`);
    await expect(page.locator('#app')).toHaveAttribute('data-canonical-screen', id);
    const audit = await page.locator('#app').evaluate(root => {
      const visible = element => {
        const style = getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden' && element.type !== 'hidden';
      };
      const controls = [...root.querySelectorAll('input,textarea,select')].filter(visible);
      const buttons = [...root.querySelectorAll('.btn.primary,.btn.gold')].filter(visible);
      return {
        fields: controls.filter(control => !control.matches('.siq-input,.siq-select,.siq-textarea,.siq-otp-input')).map(control => control.outerHTML.slice(0, 160)),
        selects: controls.filter(control => control.tagName === 'SELECT' && !control.classList.contains('siq-select')).length,
        unlabeled: controls.filter(control => {
          if (control.getAttribute('aria-label') || control.getAttribute('aria-labelledby') || control.closest('label')) return false;
          return !control.id || !root.querySelector(`label[for="${CSS.escape(control.id)}"]`);
        }).map(control => control.outerHTML.slice(0, 160)),
        primaryButtons: buttons.filter(button => !button.classList.contains('siq-button--primary')).length
      };
    });
    if (audit.fields.length || audit.selects || audit.unlabeled.length || audit.primaryButtons) failures.push({ id, ...audit });
  }
  expect(failures).toEqual([]);
});

test('headers and five-destination bottom navigation use canonical primitives', async ({ page }) => {
  for (const id of CANONICAL_SCREENS.filter(id => !id.startsWith('S-') && !id.startsWith('A-'))) {
    await page.goto(`/index.html#${id}`);
    const header = page.locator('#app .siq-header');
    if (await page.locator('#app header').count()) await expect(header).toHaveCount(1);
    const nav = page.getByRole('navigation', { name: 'Primary navigation' });
    if (['H-01', 'H-06', 'H-10'].includes(id)) continue;
    await expect(nav).toHaveClass(/siq-bottom-nav/);
    await expect(nav.getByRole('button')).toHaveCount(5);
    await expect(nav.getByRole('button')).toHaveText(['Today', 'Closet', 'Planner', 'Discover', 'More']);
  }
});

test('mobile canonical screens have no horizontal overflow or navigation-covered CTA', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const failures = [];
  for (const id of CANONICAL_SCREENS) {
    await page.goto(`/index.html#${id}`);
    const audit = await page.locator('#app').evaluate(root => {
      const screen = root.querySelector('.screen');
      const content = root.querySelector('.content');
      const nav = root.querySelector('.bottom-nav');
      const cta = [...root.querySelectorAll('.siq-button--primary')].find(button => {
        const style = getComputedStyle(button);
        return style.display !== 'none' && style.visibility !== 'hidden';
      });
      if (cta && content) cta.scrollIntoView({ block: 'center' });
      const ctaRect = cta?.getBoundingClientRect();
      const navRect = nav?.getBoundingClientRect();
      return {
        overflow: screen.scrollWidth > screen.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1,
        covered: Boolean(ctaRect && navRect && ctaRect.bottom > navRect.top && ctaRect.top < navRect.bottom)
      };
    });
    if (audit.overflow || audit.covered) failures.push({ id, ...audit });
  }
  expect(failures).toEqual([]);
});

test('focus is visibly expressed and autocomplete exposes accessible listbox state', async ({ page }) => {
  await page.goto('/index.html#A-16');
  await page.getByRole('button', { name: 'Continue with email' }).click();
  const input = page.getByLabel('First Name');
  await input.focus();
  const focusStyle = await input.evaluate(node => ({ outline: getComputedStyle(node).outlineStyle, shadow: getComputedStyle(node).boxShadow }));
  expect(focusStyle.outline !== 'none' || focusStyle.shadow !== 'none').toBeTruthy();

  await page.goto('/index.html#J-02');
  const destination = page.getByLabel('Destination');
  await expect(destination).toHaveAttribute('role', 'combobox');
  await destination.focus();
  await destination.fill('li');
  await expect(destination).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('listbox')).toBeVisible();
  await destination.press('ArrowDown');
  await destination.press('Enter');
  await expect(destination).toHaveValue('Lisbon');
  await expect(destination).toHaveAttribute('aria-expanded', 'false');
});

test('legacy component classes are compatibility hooks, not standalone visible systems', async ({ page }) => {
  await page.goto('/index.html#H-06');
  await expect(page.locator('#app .input:not(.siq-input):not(.siq-select):not(.siq-textarea):not(.siq-otp-input)')).toHaveCount(0);
  await expect(page.locator('#app .btn.primary:not(.siq-button--primary)')).toHaveCount(0);
  await expect(page.locator('#app .card:not(.siq-surface):not(.siq-card)')).toHaveCount(0);
  await expect(page.locator('#app .legacy-screen,.screen-duplicate,.input-3d')).toHaveCount(0);
});
