const { test, expect } = require('@playwright/test');

async function resetOnboarding(page, route = 'screen-y-1') {
  await page.goto(`/index.html#${route}`);
  await page.evaluate((nextRoute) => {
    loadNewUserDemo({ preserveStyleLearning: false });
    prototypeState.closet.items = [];
    prototypeState.closetItemCount = 0;
    prototypeState.vNext.styleTwinMode = 'none';
    prototypeState.styleTwinStatus = 'Not started';
    renderWp19Onboarding();
    location.hash = nextRoute;
  }, route);
}

async function reactThreeTimes(page, reactions = ['like', 'pass', 'like']) {
  for (const reaction of reactions) {
    await page.locator('#screen-y-2').getByRole('button', {
      name: reaction === 'like' ? 'Like' : 'Dislike',
      exact: true
    }).click();
  }
}

test.describe('WP-19 observation-first onboarding', () => {
  test.setTimeout(60_000);

  test('welcome and context lead with outfit imagery and one concise decision', async ({ page }) => {
    await resetOnboarding(page, 'screen-x-1');
    const welcome = page.locator('#screen-x-1');
    await expect(welcome.locator('.wp19-welcome-image')).toBeVisible();
    await expect(welcome.getByText('Your wardrobe, styled around you.')).toBeVisible();
    await expect(welcome.locator('p')).toHaveCount(1);

    await page.goto('/index.html#screen-y-1');
    const context = page.locator('#screen-y-1');
    await expect(context.getByText('What do you dress for most?')).toBeVisible();
    await expect(context.locator('.wp19-context-hero img')).toHaveCount(3);
    await context.getByRole('button', { name: /Work/ }).click();
    await expect(context.getByRole('button', { name: /Work/ })).toHaveAttribute('aria-pressed', 'true');
    await expect(context).not.toContainText(/style identity|style intelligence|classic|modern|smart casual/i);
  });

  test('reactions update progress, real undo restores the outfit, and the minimum guard blocks completion', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-2');
    const learning = page.locator('#screen-y-2');
    await expect(learning.getByRole('status').first()).toHaveText('Outfit 1 of 3');
    await expect(learning.locator('.wp19-outfit-card img')).toHaveAttribute('src', 'images/style_minimal.png');
    expect(await page.evaluate(() => wp19FinishOnboarding('setup'))).toBe(false);
    await expect(page).toHaveURL(/#screen-y-2$/);
    await learning.getByRole('button', { name: 'Like', exact: true }).click();
    await expect(learning.getByRole('status').first()).toHaveText('Outfit 2 of 3');
    await learning.getByRole('button', { name: 'Undo', exact: true }).click();
    await expect(learning.getByRole('status').first()).toHaveText('Outfit 1 of 3');
    expect(await page.evaluate(() => prototypeState.vNext.styleLearning.reactions)).toEqual([]);
    await reactThreeTimes(page);
    await expect(learning.getByText('Got it.', { exact: true })).toBeVisible();
    await expect(learning.locator('.wp19-liked-collage img')).toHaveCount(3);
    await expect(learning).not.toContainText(/minimal|classic|modern|score|%/i);
  });

  test('partial learning resumes from shared reaction state after leaving and returning', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-2');
    await page.locator('#screen-y-2').getByRole('button', { name: 'Like', exact: true }).click();
    await page.locator('#screen-y-2').getByRole('button', { name: 'Dislike', exact: true }).click();
    await page.locator('#screen-y-2').getByLabel('Back to styling context').click();
    await expect(page).toHaveURL(/#screen-y-1$/);
    await page.locator('#screen-y-1').getByRole('link', { name: 'Let’s Begin' }).click();
    await expect(page.locator('#screen-y-2').getByRole('status').first()).toHaveText('Outfit 3 of 3');
    expect(await page.evaluate(() => prototypeState.vNext.styleLearning.reactions.length)).toBe(2);
  });

  test('minimum new-user path preserves reactions and hands zero-Closet no-Twin users to visual first-run value', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-1');
    await page.locator('#screen-y-1').getByRole('link', { name: 'Let’s Begin' }).click();
    await reactThreeTimes(page);
    await page.locator('#screen-y-2').getByRole('button', { name: 'Personalize My StyleIQ' }).click();
    await expect(page).toHaveURL(/#screen-f-1$/);
    await expect(page.locator('#screen-f-1 .wp18-first-hero img')).toHaveCount(3);
    const state = await page.evaluate(() => ({
      reactions: prototypeState.vNext.styleLearning.reactions.length,
      closet: prototypeState.closet.items.length,
      twin: prototypeState.vNext.styleTwinMode,
      complete: prototypeState.onboardingComplete
    }));
    expect(state).toEqual({ reactions: 3, closet: 0, twin: 'none', complete: true });
    await page.locator('#screen-f-1').getByRole('button', { name: 'Go to Today' }).click();
    await expect(page).toHaveURL(/#screen-a-1$/);
    await expect(page.locator('#screen-a-1 img').first()).toBeVisible();
  });

  test('optional Style Twin supports an explicit neutral skip', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-3');
    await expect(page.locator('#screen-y-3').getByText('Optional', { exact: true })).toBeVisible();
    await page.locator('#screen-y-3').getByRole('button', { name: 'Not now' }).click();
    await expect(page).toHaveURL(/#screen-f-1$/);
    expect(await page.evaluate(() => prototypeState.vNext.styleTwinMode)).toBe('none');
  });

  test('optional no-photo Twin bypasses photo upload screens and renders a neutral Profile state', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-3');
    await page.locator('#screen-y-3').getByRole('button', { name: 'Create without personal photos' }).click();
    await expect(page).toHaveURL(/#screen-y-6$/);
    expect(await page.evaluate(() => prototypeState.vNext.styleTwinMode)).toBe('no-photo');
    await page.evaluate(() => {
      prototypeState.styleTwinStatus = 'Complete';
      openNormalProfile();
    });
    await expect(page.locator('#screen-f-1 .neutral-twin-figure')).toBeVisible();
  });

  test('optional inspiration is visual, skippable, and does not require a service connection', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-12');
    const inspiration = page.locator('#screen-y-12');
    await expect(inspiration.locator('.wp19-inspiration-grid img')).toHaveCount(3);
    await expect(inspiration.locator('.wp19-optional-badge')).toContainText('Optional');
    await inspiration.getByLabel('Back to My Style Profile').click();
    await expect(page).toHaveURL(/#screen-f-2$/);
  });

  test('liked onboarding outfits remain visible as shared evidence in F-2', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-2');
    await reactThreeTimes(page, ['like', 'pass', 'like']);
    await page.locator('#screen-y-2').getByRole('button', { name: 'Personalize My StyleIQ' }).click();
    await page.goto('/index.html#screen-f-2');
    await expect(page.locator('#screen-f-2 .wp18-evidence img').first()).toHaveAttribute('src', 'images/style_minimal.png');
  });

  test('critical onboarding surfaces fit the 375 by 812 phone without horizontal overflow', async ({ page }) => {
    await resetOnboarding(page, 'screen-y-2');
    const audit = await page.evaluate(() => ['screen-x-1', 'screen-y-1', 'screen-y-2', 'screen-y-3', 'screen-y-12'].map((id) => {
      const screen = document.getElementById(id);
      const phone = screen.querySelector('.phone') || screen;
      return { id, overflow: phone.scrollWidth > phone.clientWidth };
    }));
    expect(audit.every(({ overflow }) => !overflow)).toBe(true);
  });
});
