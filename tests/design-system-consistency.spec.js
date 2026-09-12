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

test('fields inherit the Sign In geometry and preserve semantic control types', async ({ page }) => {
  await page.goto('/index.html#A-01');
  const signInStyle = await page.locator('.auth-input-wrap').first().evaluate(node => {
    const style = getComputedStyle(node);
    return {
      height: style.height,
      radius: style.borderRadius,
      background: style.backgroundColor,
      borderColor: style.borderColor
    };
  });

  await page.goto('/index.html#I-04');
  const date = page.locator('#planner-event-date');
  const time = page.locator('#planner-event-time');
  const occasion = page.getByLabel('Occasion / dress code');
  const daypart = page.getByLabel('Daypart');

  await expect(date).toHaveAttribute('type', 'date');
  await expect(time).toHaveAttribute('type', 'time');
  await expect(date).toHaveClass(/siq-control--date/);
  await expect(time).toHaveClass(/siq-control--time/);
  await expect(occasion).toHaveClass(/siq-control--select/);
  await expect(daypart).toHaveClass(/siq-control--select/);

  const eventStyle = await date.evaluate(node => {
    const style = getComputedStyle(node);
    return {
      height: style.height,
      radius: style.borderRadius,
      background: style.backgroundColor,
      borderColor: style.borderColor
    };
  });
  expect(eventStyle).toEqual(signInStyle);
});

test('required, invalid, search and compact field states are standardized', async ({ page }) => {
  await page.goto('/index.html#A-16');
  await page.getByRole('button', { name: 'Continue with email' }).click();
  const firstName = page.getByLabel('First Name');
  await expect(firstName).toHaveAttribute('required', '');
  await expect(page.locator('label[for="signup-first-name"]')).toHaveClass(/siq-label--required/);
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(firstName).toHaveAttribute('aria-invalid', 'true');

  await page.goto('/index.html#H-11');
  const search = page.locator('.creator-search-input');
  await expect(search).not.toHaveClass(/siq-search-input--standalone/);
  await expect(search).toHaveClass(/siq-control--compact/);
  const searchStyle = await search.evaluate(node => ({
    height: getComputedStyle(node).height,
    backgroundImage: getComputedStyle(node).backgroundImage
  }));
  expect(searchStyle.height).toBe('44px');
  expect(searchStyle.backgroundImage).toBe('none');
  await expect(page.locator('.creator-search-wrap > .search-icon')).toBeVisible();
});

test('legacy component classes are compatibility hooks, not standalone visible systems', async ({ page }) => {
  await page.goto('/index.html#H-06');
  await expect(page.locator('#app .input:not(.siq-input):not(.siq-select):not(.siq-textarea):not(.siq-otp-input)')).toHaveCount(0);
  await expect(page.locator('#app .btn.primary:not(.siq-button--primary)')).toHaveCount(0);
  await expect(page.locator('#app .card:not(.siq-surface):not(.siq-card)')).toHaveCount(0);
  await expect(page.locator('#app .legacy-screen,.screen-duplicate,.input-3d')).toHaveCount(0);
});

test('planner navigation groups larger arrows at the right and changes the visible week', async ({ page }) => {
  await page.goto('/index.html#I-01');
  const line = page.locator('.planner-month-line');
  const title = line.locator(':scope > b');
  const actions = line.locator('.planner-month-actions');
  const buttons = actions.getByRole('button');
  await expect(buttons).toHaveCount(2);

  const geometry = await line.evaluate(node => {
    const titleRect = node.querySelector(':scope > b').getBoundingClientRect();
    const actionRect = node.querySelector('.planner-month-actions').getBoundingClientRect();
    const button = node.querySelector('button');
    const buttonStyle = getComputedStyle(button);
    return {
      groupedRight: actionRect.left > titleRect.right,
      width: buttonStyle.width,
      height: buttonStyle.height,
      fontSize: buttonStyle.fontSize,
      shadow: buttonStyle.boxShadow
    };
  });
  expect(geometry).toEqual({ groupedRight: true, width: '48px', height: '48px', fontSize: '34px', shadow: 'none' });

  const before = await page.locator('.mirror-day').first().locator('b').textContent();
  await page.getByRole('button', { name: 'Next week' }).click();
  await expect(page.locator('.mirror-day').first().locator('b')).not.toHaveText(before);
});

test('form disclosures are flat, full width, and keep secondary copy beneath the title', async ({ page }) => {
  for (const [id, name] of [['I-04', 'More details'], ['J-02', 'Must bring & notes'], ['L-04', 'About you']]) {
    await page.goto(`/index.html#${id}`);
    const details = page.locator('.siq-form-disclosure').filter({ has: page.getByText(name, { exact: true }) }).first();
    await expect(details).toBeVisible();
    const audit = await details.evaluate(node => {
      const summary = node.querySelector(':scope > summary');
      const title = summary.querySelector('b').getBoundingClientRect();
      const secondary = summary.querySelector('.small').getBoundingClientRect();
      const style = getComputedStyle(node);
      return {
        shadow: style.boxShadow,
        radius: style.borderRadius,
        background: style.backgroundColor,
        fullWidth: Math.abs(node.getBoundingClientRect().width - node.parentElement.getBoundingClientRect().width) < 1,
        secondaryBelow: secondary.top >= title.bottom
      };
    });
    expect(audit).toEqual({ shadow: 'none', radius: '0px', background: 'rgba(0, 0, 0, 0)', fullWidth: true, secondaryBelow: true });
  }

  await page.goto('/index.html#L-04');
  const sizes = page.locator('.siq-form-disclosure').filter({ hasText: 'Brands & Fit' }).locator('.row');
  const columns = await sizes.evaluate(node => getComputedStyle(node).gridTemplateColumns);
  expect(columns.split(' ').length).toBe(1);
});
