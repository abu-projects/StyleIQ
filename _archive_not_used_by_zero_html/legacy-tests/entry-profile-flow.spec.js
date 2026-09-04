const { test, expect } = require('@playwright/test');

async function openEntry(page) {
  await page.goto('/index.html#screen-x-1');
}

async function openSetup(page) {
  await page.goto('/index.html#screen-y-2');
  await page.locator('#screen-y-2').getByRole('button', { name: 'Personalize My StyleIQ' }).click();
  await expect(page).toHaveURL(/#screen-f-1$/);
}

async function openNormalProfile(page) {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => openNormalProfile());
}

test('01 X-1 has exactly Continue, Log In, and Sign Up', async ({ page }) => {
  await openEntry(page);
  const screen = page.locator('#screen-x-1');
  await expect(screen.getByRole('link', { name: 'Continue', exact: true })).toHaveCount(1);
  await expect(screen.getByRole('button', { name: 'Log In', exact: true })).toHaveCount(1);
  await expect(screen.getByRole('button', { name: 'Sign Up', exact: true })).toHaveCount(1);
});

test('02 Continue routes X-1 to A-1', async ({ page }) => {
  await openEntry(page);
  await page.locator('#screen-x-1').getByRole('link', { name: 'Continue', exact: true }).click();
  await expect(page).toHaveURL(/#screen-a-1$/);
});

test('03 Log In opens X-2 in login mode', async ({ page }) => {
  await openEntry(page);
  await page.locator('#screen-x-1').getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveURL(/#screen-x-2$/);
  await expect(page.locator('#screen-x-2 h3')).toHaveText('Welcome back.');
});

for (const [number, provider] of [['04', 'Apple'], ['05', 'Google']]) {
  test(`${number} login with ${provider} routes to A-1`, async ({ page }) => {
    await openEntry(page);
    await page.locator('#screen-x-1').getByRole('button', { name: 'Log In' }).click();
    await page.locator('#screen-x-2').getByRole('button', { name: `Continue with ${provider}` }).click();
    await expect(page).toHaveURL(/#screen-a-1$/);
  });
}

test('06 login email verifies through X-3/X-4 and routes to A-1', async ({ page }) => {
  await openEntry(page);
  await page.locator('#screen-x-1').getByRole('button', { name: 'Log In' }).click();
  await page.locator('#screen-x-2').getByRole('link', { name: 'Continue with Email' }).click();
  await page.locator('#auth-email').fill('returning@example.com');
  await page.locator('#screen-x-3').getByRole('button', { name: 'Send Verification Code' }).click();
  await expect(page).toHaveURL(/#screen-x-4$/, { timeout: 2000 });
  await page.locator('#auth-code').fill('246810');
  await page.locator('#screen-x-4').getByRole('button', { name: 'Verify and Continue' }).click();
  await expect(page).toHaveURL(/#screen-a-1$/);
});

test('07 Sign Up opens X-2 in signup mode', async ({ page }) => {
  await openEntry(page);
  await page.locator('#screen-x-1').getByRole('button', { name: 'Sign Up' }).click();
  await expect(page).toHaveURL(/#screen-x-2$/);
  await expect(page.locator('#screen-x-2 h3')).toHaveText('Create your account.');
});

for (const [number, provider] of [['08', 'Apple'], ['09', 'Google']]) {
  test(`${number} signup with ${provider} routes to Y-1`, async ({ page }) => {
    await openEntry(page);
    await page.locator('#screen-x-1').getByRole('button', { name: 'Sign Up' }).click();
    await page.locator('#screen-x-2').getByRole('button', { name: `Continue with ${provider}` }).click();
    await expect(page).toHaveURL(/#screen-y-1$/);
  });
}

test('10 signup email verifies through X-3/X-4 and routes to Y-1', async ({ page }) => {
  await openEntry(page);
  await page.locator('#screen-x-1').getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('#screen-x-2').getByRole('link', { name: 'Continue with Email' }).click();
  await page.locator('#auth-email').fill('new@example.com');
  await page.locator('#screen-x-3').getByRole('button', { name: 'Send Verification Code' }).click();
  await expect(page).toHaveURL(/#screen-x-4$/, { timeout: 2000 });
  await page.locator('#auth-code').fill('246810');
  await page.locator('#screen-x-4').getByRole('button', { name: 'Verify and Continue' }).click();
  await expect(page).toHaveURL(/#screen-y-1$/);
});

test('11 Y-1 continues to Y-2', async ({ page }) => {
  await page.goto('/index.html#screen-y-1');
  await page.locator('#screen-y-1').getByRole('link', { name: 'Let’s Begin' }).click();
  await expect(page).toHaveURL(/#screen-y-2$/);
});

test('12 Y-2 Personalize opens F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('13 Y-2 Go to Today routes to A-1', async ({ page }) => {
  await page.goto('/index.html#screen-y-2');
  await page.locator('#screen-y-2').getByRole('button', { name: 'Go to Today' }).click();
  await expect(page).toHaveURL(/#screen-a-1$/);
});

test('14 Setup Hub has no overall percentage', async ({ page }) => {
  await openSetup(page);
  await expect(page.locator('#screen-f-1 .phone')).not.toContainText(/\b\d{1,3}%\b/);
});

test('15 Setup Hub Closet opens C-2', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Closet/ }).click();
  await expect(page).toHaveURL(/#screen-c-2$/);
});

test('16 C-5 can return to Setup Hub after setup Closet entry', async ({ page }) => {
  await openSetup(page);
  await page.evaluate(() => { prototypeState.vNext.setupHub.lastModule = 'closet'; location.hash = 'screen-c-5'; });
  await page.locator('#screen-c-5').getByRole('button', { name: 'Return to Setup Hub' }).click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('17 Setup Hub Twin opens Y-3', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Style Twin/ }).click();
  await expect(page).toHaveURL(/#screen-y-3$/);
});

test('18 Twin Done returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'photo'; prototypeState.styleTwinStatus = 'Complete'; location.hash = 'screen-y-14'; });
  await page.locator('#finish-twin').click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('19 Twin Save and Finish Later returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.evaluate(() => { location.hash = 'screen-y-4'; });
  await page.locator('#screen-y-4').getByText('Save and Finish Later', { exact: true }).click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('20 Setup Hub Fit and Sizes opens F-3', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Fit & Sizes/ }).click();
  await expect(page).toHaveURL(/#screen-f-3$/);
});

test('21 F-3 Brand Fit returns through Y-7 to F-3', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Fit & Sizes/ }).click();
  await page.locator('#screen-f-3').getByRole('link', { name: 'Edit Brand Fit' }).click();
  await page.locator('#brand-fit-skip').click();
  await expect(page).toHaveURL(/#screen-f-3$/);
});

test('22 F-3 Shoe Preferences returns through Y-10 to F-3', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Fit & Sizes/ }).click();
  await page.locator('#screen-f-3').getByRole('link', { name: 'Edit Shoe Preferences' }).click();
  await page.locator('#screen-y-10').getByRole('link', { name: 'Save Shoe Preferences' }).click();
  await expect(page).toHaveURL(/#screen-f-3$/);
});

test('23 F-3 Back returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Fit & Sizes/ }).click();
  await page.locator('#screen-f-3 .topbar a').click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('24 Y-11 Finish returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Style Taste/ }).click();
  await page.evaluate(() => {
    prototypeState.vNext.styleLearning.reactions = [{ id: 'a', reaction: 'like' }, { id: 'b', reaction: 'like' }, { id: 'c', reaction: 'pass' }];
    finishVisualLearning();
  });
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('25 Y-11 Back returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Style Taste/ }).click();
  await page.locator('#screen-y-11').getByRole('button', { name: 'Go back' }).click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('26 Y-12 Save returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: 'Add Style Inspiration' }).click();
  await page.locator('#save-style-inspiration').click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('27 Y-12 Back returns to F-1 setup mode', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: 'Add Style Inspiration' }).click();
  await page.locator('#screen-y-12 .topbar a').click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

test('28 Optional module actions do not chain into another module', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: /Closet/ }).click();
  await expect(page).toHaveURL(/#screen-c-2$/);
  await expect(page).not.toHaveURL(/#screen-y-(3|7|10|11|12)$/);
});

test('29 Setup Hub Go to Today routes to A-1', async ({ page }) => {
  await openSetup(page);
  await page.locator('#screen-f-1').getByRole('button', { name: 'Go to Today' }).click();
  await expect(page).toHaveURL(/#screen-a-1$/);
});

test('30 Main app Profile opens F-1 normal profile mode', async ({ page }) => {
  await page.goto('/index.html#screen-a-1');
  await page.locator('#screen-a-1 .bottom-nav').getByText('Profile', { exact: true }).click();
  await expect(page.locator('#screen-f-1')).toContainText('My Atelier');
});

test('31 Normal F-1 is not the Setup Hub by default', async ({ page }) => {
  await openNormalProfile(page);
  await expect(page.locator('#screen-f-1 h3')).not.toHaveText('Personalize My StyleIQ');
});

test('32 Incomplete normal profile can continue personalizing', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.closet.items = []; prototypeState.vNext.styleLearning = { currentIndex: 0, reactions: [], likedIds: [], passedIds: [] }; prototypeState.vNext.styleTwinMode = 'none'; prototypeState.styleTwinStatus = 'Not started'; openNormalProfile(); });
  await page.locator('#screen-f-1').getByRole('button', { name: 'Continue Personalizing' }).click();
  await expect(page.locator('#screen-f-1 h3')).toHaveText('Personalize My StyleIQ');
});

for (const [number, label, destination] of [
  ['33', 'Outfit History', 'f-7'], ['34', 'Style Story', 'f-8'], ['35', 'Style Wrapped', 'f-9'],
  ['36', 'Style Boards', 'f-10'], ['37', 'Preferences & Sizes', 'f-3'], ['38', 'Wardrobe Value', 'e-1'], ['39', 'Settings', 'f-14']
]) {
  test(`${number} normal profile ${label} routes to ${destination.toUpperCase()}`, async ({ page }) => {
    await openNormalProfile(page);
    await page.locator('#screen-f-1').getByText(label, { exact: true }).last().click();
    await expect(page).toHaveURL(new RegExp(`#screen-${destination}$`));
  });
}

test('40 No Twin does not use a photo Twin as identity', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'none'; prototypeState.styleTwinStatus = 'Not started'; openNormalProfile(); });
  await expect(page.locator('#screen-f-1 img[src="images/profile_woman.png"]')).toHaveCount(0);
});

test('41 No-photo Twin uses the neutral representation', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'no-photo'; prototypeState.styleTwinStatus = 'Complete'; openNormalProfile(); });
  await expect(page.locator('#screen-f-1 .neutral-twin-figure')).toBeVisible();
});

test('42 Photo Twin uses the current photo representation', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.vNext.styleTwinMode = 'photo'; prototypeState.styleTwinStatus = 'Complete'; openNormalProfile(); });
  await expect(page.locator('#screen-f-1 img[src="images/profile_woman.png"]')).toHaveCount(2);
});

test('43 Zero Closet shows no fake owned wardrobe collage', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.closet.items = []; openNormalProfile(); });
  await expect(page.locator('#screen-f-1 img[alt^="Owned "]')).toHaveCount(0);
  await expect(page.locator('#screen-f-1')).toContainText('Your real Closet pieces will appear here.');
});

test('44 Populated Closet shows actual owned-piece thumbnails', async ({ page }) => {
  await page.goto('/index.html#screen-f-1');
  await page.evaluate(() => { prototypeState.closet.items = [{ id: 'actual-shirt', name: 'Actual Ivory Shirt', image: 'images/item_silk_shell.png', category: 'Top', color: 'Ivory' }]; openNormalProfile(); });
  await expect(page.locator('#screen-f-1 img[alt="Owned Actual Ivory Shirt"]')).toBeVisible();
});
