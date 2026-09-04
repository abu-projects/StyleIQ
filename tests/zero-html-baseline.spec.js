const { test, expect } = require('@playwright/test');

const ROOT_DESTINATIONS = [
  ['Closet', 'C-01'],
  ['Planner', 'I-01'],
  ['Discover', 'K-01']
];

test.beforeEach(async ({ page }) => {
  await page.goto('/0.html#D-02');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
});

test('the complete registered inventory renders without route, asset, or runtime failures', async ({ page }) => {
  const runtimeErrors = [];
  page.on('pageerror', error => runtimeErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') runtimeErrors.push(message.text());
  });

  const ids = await page.locator('#screen-list [data-id]').evaluateAll(links =>
    links.map(link => link.dataset.id)
  );
  expect(ids).toHaveLength(123);
  expect(new Set(ids).size).toBe(123);

  const failures = [];
  for (const id of ids) {
    await page.evaluate(nextId => {
      location.hash = nextId;
    }, id);
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
    const result = await page.evaluate(() => {
      const app = document.getElementById('app');
      const images = [...app.querySelectorAll('img')];
      return {
        active: app.dataset.screen,
        screens: app.querySelectorAll('.screen').length,
        brokenImages: images.filter(image => image.complete && image.naturalWidth === 0).map(image => image.src),
        horizontalOverflow: app.scrollWidth > app.clientWidth + 1,
        documentOverflow: document.documentElement.scrollWidth > window.innerWidth + 1
      };
    });
    if (result.active !== id || result.screens !== 1 || result.brokenImages.length || result.horizontalOverflow || result.documentOverflow) {
      failures.push({ id, ...result });
    }
  }

  expect(failures).toEqual([]);
  expect(runtimeErrors).toEqual([]);
});

for (const [label, id] of ROOT_DESTINATIONS) {
  test(`primary navigation opens ${label} in the same app shell`, async ({ page }) => {
    await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('button', { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
    await expect(page.locator('#app .screen')).toHaveCount(1);
    await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  });
}

test('More exposes secondary jobs without nesting another screen', async ({ page }) => {
  await page.getByRole('button', { name: 'Open More menu' }).click();
  const menu = page.getByRole('complementary', { name: 'Account navigation' });
  await expect(menu).toBeVisible();
  await menu.getByRole('button', { name: /Style Studio/ }).click();
  await expect(page).toHaveURL(/#F-01$/);
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('entry walkthrough can reach useful Today value without required setup', async ({ page }) => {
  await page.goto('/0.html#S-00');
  await page.getByRole('button', { name: 'Explore StyleIQ' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'S-01');
  await page.getByRole('button', { name: 'Skip to Today' }).click();
  await expect(page).toHaveURL(/#D-02$/);
  await expect(page.getByRole('heading', { name: 'Good morning, Amelia' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Coffee meeting outfit in warm natural daylight' })).toBeVisible();
});

test('adding a Closet photo reaches success and returns to Today', async ({ page }) => {
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('button', { name: 'Closet' }).click();
  await page.getByRole('button', { name: 'Add an item' }).click();
  await page.getByRole('button', { name: /Photos/ }).click();
  await page.getByRole('button', { name: 'Review first item only' }).click();
  await page.getByRole('button', { name: 'Looks right · Add' }).click();
  await expect(page.getByRole('heading', { name: 'Added to your Closet' })).toBeVisible();
  await page.getByRole('button', { name: 'See what changed' }).click();
  await expect(page).toHaveURL(/#D-02$/);
  await expect(page.getByRole('heading', { name: 'Good morning, Amelia' })).toBeVisible();
});

test('a contextual action returns to its originating Today screen', async ({ page }) => {
  await page.getByRole('button', { name: 'Make From My Closet' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page).toHaveURL(/#D-02$/);
  await expect(page.getByRole('heading', { name: 'Good morning, Amelia' })).toBeVisible();
});

test('the More menu dismisses without changing the current job', async ({ page }) => {
  await page.getByRole('button', { name: 'Open More menu' }).click();
  const menu = page.getByRole('complementary', { name: 'Account navigation' });
  await menu.getByRole('button', { name: 'Close account menu' }).click();
  await expect(menu).toHaveCount(0);
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
});

test('saving a recommendation uses one approval sheet and preserves Today context', async ({ page }) => {
  await page.getByRole('button', { name: 'Save outfit' }).click();
  const dialog = page.getByRole('dialog', { name: 'Save this Look' });
  await expect(dialog).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
  await dialog.getByRole('button', { name: 'Save Look' }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('status')).toContainText('Look saved');
});

test('lightweight feedback captures a reason without routing away from the outfit', async ({ page }) => {
  await page.goto('/0.html#D-04');
  await page.getByRole('button', { name: 'Not for me' }).click();
  const dialog = page.getByRole('dialog', { name: 'What missed?' });
  const reason = dialog.getByRole('button', { name: 'Wrong Color' });
  await reason.click();
  await expect(reason).toHaveAttribute('aria-pressed', 'true');
  await dialog.getByRole('button', { name: 'Save feedback' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');
  await expect(page.getByRole('status')).toContainText('Feedback saved');
});

test('high-confidence item processing is automatic with one compact review', async ({ page }) => {
  await page.goto('/0.html#B-06');
  await expect(page.getByText('Processed automatically')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Looks right · Add' })).toBeVisible();
  await expect(page.getByLabel('Item name')).not.toBeVisible();
  await page.getByText('Edit details', { exact: true }).click();
  await expect(page.getByLabel('Item name')).toHaveValue('Black tailored blazer');
  await page.getByLabel('Item name').fill('Camel tailored blazer');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'B-06');
  await expect(page.locator('#app').getByRole('button', { name: /Process photo|Prettify/ })).toHaveCount(0);
  await page.getByText('What StyleIQ prepared').click();
  await expect(page.getByText(/Garment isolated, image normalized/)).toBeVisible();
  await page.getByRole('button', { name: 'Looks right · Add' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'B-11');
});

test('failed item processing offers transparent recovery without an internal AI stage', async ({ page }) => {
  await page.goto('/0.html#B-07');
  await expect(page.getByRole('heading', { name: 'We couldn’t isolate one clear item.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Choose another photo' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Keep original and review' })).toBeVisible();
  await expect(page.getByRole('status').filter({ hasText: /Preparing your item/ })).toHaveCount(0);
  await page.getByRole('button', { name: 'Keep original and review' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'B-06');
});

test('uncertain import fields are grouped into one interruption', async ({ page }) => {
  await page.goto('/0.html#B-10');
  await page.locator('#app').getByRole('button', { name: 'Review once' }).first().click();
  await expect(page.getByText('Two details need you')).toBeVisible();
  await expect(page.getByLabel('Brand')).toBeVisible();
  await expect(page.getByLabel('Category')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Confirm 2 details & add' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Looks right · Add' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Confirm 2 details & add' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'B-11');
});

test('Prettify is removed as a standalone workflow and automatic cleanup stays contextual', async ({ page }) => {
  for (const id of ['B-03', 'B-06', 'B-07', 'B-08', 'C-03', 'L-10']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.locator('#app').getByText(/Prettify|Prettifying/i)).toHaveCount(0);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
  await page.goto('/0.html#B-03');
  await expect(page.getByRole('heading', { name: 'Add garment photos' })).toBeVisible();
  await page.goto('/0.html#L-10');
  await expect(page.getByRole('heading', { name: 'Photo handling', level: 2 })).toBeVisible();
  await expect(page.getByText('Automatic cleanup · Always on')).toBeVisible();
  await expect(page.getByText('Keep original photos · On')).toBeVisible();
});

test('photo repair is secondary to canonical Item Detail', async ({ page }) => {
  await page.goto('/0.html#C-03');
  await expect(page.getByRole('heading', { name: 'Black tailored blazer' })).toBeVisible();
  await page.getByRole('button', { name: 'Edit item photo' }).click();
  const sheet = page.getByRole('dialog', { name: 'Edit without leaving' });
  await expect(sheet.getByRole('button', { name: 'Clean background' })).toBeVisible();
  await sheet.getByRole('button', { name: 'Save photo' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-03');
  await expect(page.getByRole('status')).toContainText('Item photo updated');
});

test('batch import processes together, reviews only uncertainty, skips duplicates, and commits once', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.getByRole('button', { name: 'Add an item' }).click();
  await page.getByRole('button', { name: /Photos/ }).click();
  const selected = page.getByRole('group', { name: 'Selected garment photos' });
  await expect(selected.getByRole('button')).toHaveCount(4);
  await page.getByRole('button', { name: 'Process 4 photos' }).click();
  await expect(page.getByRole('heading', { name: '4 photos processed' })).toBeVisible();
  await expect(page.getByText('2 items ready to add')).toBeVisible();
  await expect(page.getByText('Duplicate skipped')).toBeVisible();
  await page.getByRole('button', { name: 'Review once' }).click();
  await expect(page.getByText('Two details need you')).toBeVisible();
  await page.getByRole('button', { name: 'Confirm 2 details & add' }).click();
  await expect(page.getByText('3 items ready to add')).toBeVisible();
  await page.getByRole('button', { name: 'Add 3 ready items' }).click();
  await expect(page.getByRole('heading', { name: '3 items added' })).toBeVisible();
  await expect(page.getByText(/duplicate was skipped safely/i)).toBeVisible();
  await page.getByRole('button', { name: 'View updated Closet' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-01');
  await expect(page.locator('.closet-item')).toHaveCount(15);
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('photo batch picker covers empty, partial, and retry states', async ({ page }) => {
  await page.goto('/0.html#B-02');
  const photos = page.getByRole('group', { name: 'Selected garment photos' }).getByRole('button');
  await photos.nth(0).click();
  await photos.nth(1).click();
  await expect(page.getByRole('button', { name: 'Process 2 photos' })).toBeEnabled();
  await photos.nth(2).click();
  await photos.nth(3).click();
  await expect(page.getByRole('button', { name: 'Select at least one photo' })).toBeDisabled();
  await page.goto('/0.html#B-07');
  await page.getByRole('button', { name: 'Choose another photo' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'B-02');
  await expect(page.getByRole('heading', { name: 'Add garment photos' })).toBeVisible();
});

test('Learn from my photos turns historical outfits into editable non-Closet signals', async ({ page }) => {
  await page.goto('/0.html#L-01');
  await page.evaluate(() => localStorage.removeItem('styleiqPhotoLearningV1'));
  await page.reload();
  const entry = page.getByRole('region', { name: 'Learn from my photos' });
  await entry.getByRole('button', { name: 'Choose outfit photos' }).click();
  let sheet = page.getByRole('dialog', { name: 'Learn from my photos' });
  await expect(sheet.getByRole('img')).toHaveCount(3);
  await sheet.getByRole('button', { name: 'Learn from 3 photos' }).click();
  sheet = page.getByRole('dialog', { name: 'Review inferred style' });
  await expect(sheet.getByText(/not confirmed Closet items/i)).toBeVisible();
  const signals = sheet.getByRole('group', { name: 'Inferred photo signals' });
  await expect(signals.getByRole('button')).toHaveCount(4);
  await signals.getByRole('button', { name: 'Oxblood accents' }).click();
  await expect(signals.getByRole('button', { name: 'Oxblood accents' })).toHaveAttribute('aria-pressed', 'false');
  await sheet.getByRole('button', { name: 'Use these insights' }).click();
  await expect(page.getByRole('status')).toContainText('Photo insights saved');
  await expect(entry.getByText('3 editable signals')).toBeVisible();
  await page.reload();
  await expect(page.getByText('Photo insights are active')).toBeVisible();
  await page.getByRole('button', { name: 'Undo photo learning' }).click();
  await expect(page.getByRole('button', { name: 'Choose outfit photos' })).toBeVisible();
});

test('photo learning uses the same entry from Muse without a feature detour', async ({ page }) => {
  await page.goto('/0.html#M-01');
  const entry = page.getByRole('region', { name: 'Learn from my photos' });
  await expect(entry).toBeVisible();
  await entry.getByRole('button', { name: /Choose outfit photos|Review photo insights/ }).click();
  await expect(page.getByRole('dialog', { name: 'Learn from my photos' })).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'M-01');
  await page.getByRole('button', { name: 'Close Learn from my photos' }).click();
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('StyleIQ Lens is persistently available on every primary root without replacing navigation', async ({ page }) => {
  for (const id of ['D-02', 'C-01', 'I-01', 'K-01', 'L-01']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('button', { name: 'Open StyleIQ Lens' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('Lens accepts camera, library, and screenshot inputs in one reusable overlay', async ({ page }) => {
  for (const source of ['Camera', 'Photo library', 'Screenshot']) {
    await page.goto('/0.html#D-02');
    await page.getByRole('button', { name: 'Open StyleIQ Lens' }).click();
    const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
    await lens.getByRole('button', { name: source }).click();
    await expect(lens.getByRole('heading', { name: 'What should Lens do?' })).toBeVisible();
    await expect(lens.getByRole('group', { name: 'Lens intent' }).getByRole('button')).toHaveCount(7);
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
    await lens.getByRole('button', { name: 'Close StyleIQ Lens' }).click();
    await expect(lens).toHaveCount(0);
  }
});

test('Lens routes all visual jobs through contextual results and canonical destinations', async ({ page }) => {
  const jobs = [
    ['Add Closet items', 'Review detected items', 'B-02'],
    ['Should I buy this?', 'Compare owned', 'C-01'],
    ['Recreate this outfit', 'Make it mine', 'F-01'],
    ['Improve my outfit', 'Apply in Studio', 'F-01'],
    ['Check my suitcase', 'Update packing list', 'J-08'],
    ['Shop my Closet', 'View Closet matches', 'C-01'],
    ['Find owned alternatives', 'View owned alternatives', 'C-01']
  ];
  for (const [intent, action, destination] of jobs) {
    await page.goto('/0.html#D-02');
    await page.getByRole('button', { name: 'Open StyleIQ Lens' }).click();
    const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
    await lens.getByRole('button', { name: 'Camera' }).click();
    await lens.getByRole('button', { name: new RegExp(intent) }).click();
    await expect(lens.getByRole('img', { name: 'Lens visual input' })).toBeVisible();
    await lens.getByRole('button', { name: action, exact: true }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', destination);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('Lens purchase and screenshot search prioritize owned visual alternatives', async ({ page }) => {
  for (const intent of ['Should I buy this?', 'Shop my Closet', 'Find owned alternatives']) {
    await page.goto('/0.html#K-01');
    await page.getByRole('button', { name: 'Open StyleIQ Lens' }).click();
    const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
    await lens.getByRole('button', { name: 'Screenshot' }).click();
    await lens.getByRole('button', { name: new RegExp(intent) }).click();
    await expect(lens.getByRole('region', { name: 'Owned visual matches' })).toBeVisible();
    await expect(lens.locator('.lens-match')).toHaveCount(3);
    await expect(lens.getByText(/owned|Closet/i).first()).toBeVisible();
    await lens.getByRole('button', { name: 'Close StyleIQ Lens' }).click();
  }
});

test('Profile makes Style Inspiration and creator references explicit and manageable', async ({ page }) => {
  await page.goto('/0.html#L-01');
  const inspiration = page.getByRole('region', { name: 'Style Inspiration' });
  await expect(inspiration.getByText(/photos, screenshots, Instagram, Pinterest, creators, and celebrities/i)).toBeVisible();
  await inspiration.getByRole('button', { name: 'Manage inspiration' }).click();
  let sheet = page.getByRole('dialog', { name: 'Style Inspiration' });
  await expect(sheet.getByText(/simulated in this prototype/i)).toBeVisible();
  await sheet.getByLabel('Creator, celebrity, handle, or link').fill('@newcreator');
  await sheet.getByRole('button', { name: 'Add reference' }).click();
  sheet = page.getByRole('dialog', { name: 'Style Inspiration' });
  await expect(sheet.getByText('@newcreator')).toBeVisible();
  await sheet.getByRole('button', { name: 'Remove @newcreator' }).click();
  await expect(page.getByRole('dialog', { name: 'Style Inspiration' }).getByText('@newcreator')).toHaveCount(0);
});

test('Profile and My Looks use canonical counts and creation-source filters', async ({ page }) => {
  await page.goto('/0.html#L-01');
  const summary = page.getByRole('region', { name: 'My Looks summary' });
  await expect(summary.getByRole('heading', { name: '5 Looks' })).toBeVisible();
  await expect(summary.getByRole('button', { name: /2 Created by me/i })).toBeVisible();
  await summary.getByRole('button', { name: /5 Total/i }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'G-01');
  await expect(page.locator('.item-card')).toHaveCount(5);
  const sources = page.getByRole('group', { name: 'Look creation source' });
  for (const source of ['Created by Me', 'With Muse', 'Muse Generated', 'Recreated from Inspiration']) {
    await expect(sources.getByRole('button', { name: source, exact: true })).toBeVisible();
  }
  await sources.getByRole('button', { name: 'Created by Me', exact: true }).click();
  await expect(page.locator('.item-card')).toHaveCount(2);
});

test('creator inspiration centers owned equivalents and one Make It Mine action', async ({ page }) => {
  await page.goto('/0.html#K-04');
  await expect(page.getByRole('heading', { name: 'Make the formula yours.' })).toBeVisible();
  await expect(page.getByText(/own equivalents for 3 of 4 roles/i)).toBeVisible();
  await expect(page.getByRole('region', { name: 'Owned visual matches' })).toBeVisible();
  await page.getByRole('button', { name: 'Make It Mine' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
  const source = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')).creationSource);
  expect(source).toBe('creator_recreated');
});

test('minimum email onboarding asks for the styling goal then delivers Today value', async ({ page }) => {
  await page.goto('/0.html#A-01');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByRole('button', { name: 'Use this name', exact: true }).click();
  await page.getByRole('button', { name: 'Create my account', exact: true }).click();
  await page.getByRole('button', { name: 'Verify email', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'What should StyleIQ help with first?' })).toBeVisible();
  await page.getByRole('button', { name: /Wear more of my Closet/ }).click();
  await expect(page).toHaveURL(/#D-02$/);
  await expect(page.getByRole('heading', { name: 'Good morning, Amelia' })).toBeVisible();
});

test('legacy item-detail routes resolve to one progressively disclosed editor', async ({ page }) => {
  for (const id of ['C-02', 'C-03', 'C-04', 'C-05', 'C-06']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: 'Black tailored blazer' })).toBeVisible();
    await expect(page.getByLabel('Name')).toHaveValue('Black tailored blazer');
    await expect(page.getByText('Styling details')).toBeVisible();
  }
});

test('legacy saved-look detail routes resolve to one canonical detail surface', async ({ page }) => {
  for (const id of ['G-02', 'G-03', 'G-04', 'G-05', 'G-06', 'G-07']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: 'Design Review' })).toBeVisible();
    await expect(page.locator('#app').getByText('Items', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Edit', exact: true })).toBeVisible();
  }
});

test('Muse carries the current screen context into one global entry', async ({ page }) => {
  const contexts = [
    ['C-01', 'Ask Muse about Closet', /From this Closet item/i],
    ['I-01', 'Ask Muse about Planner', /From this Planner day/i],
    ['K-01', 'Ask Muse about Discover', /From this Discover Look/i],
    ['L-01', 'Ask Muse about profile', /From your style profile/i]
  ];
  for (const [id, action, context] of contexts) {
    await page.goto(`/0.html#${id}`);
    await page.getByRole('button', { name: action }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'M-01');
    await expect(page.getByText(context)).toBeVisible();
  }
});

test('Not for Me uses the approved reasons and only Other reveals detail', async ({ page }) => {
  await page.goto('/0.html#D-04');
  await page.getByRole('button', { name: 'Not for me' }).click();
  const dialog = page.getByRole('dialog', { name: 'What missed?' });
  for (const reason of ['Too Formal', 'Too Casual', 'Wrong Color', 'Don’t Like This Item', 'Not My Style', 'Other']) {
    await expect(dialog.getByRole('button', { name: reason, exact: true })).toBeVisible();
  }
  await expect(dialog.getByLabel('Tell Muse more')).toHaveCount(0);
  await dialog.getByRole('button', { name: 'Other', exact: true }).click();
  await page.getByRole('dialog', { name: 'What missed?' }).getByLabel('Tell Muse more').fill('The proportion feels heavy');
  await page.getByRole('dialog', { name: 'What missed?' }).getByRole('button', { name: 'Save feedback' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');
  await expect(page.getByRole('dialog', { name: 'What missed?' })).toHaveCount(0);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqMuseFeedbackV1')));
  expect(saved).toMatchObject({ reason: 'Other', detail: 'The proportion feels heavy' });
});

test('Saved Look keeps styling actions primary and management in overflow', async ({ page }) => {
  await page.goto('/0.html#G-02');
  const actions = page.getByLabel('Saved Look actions');
  for (const action of ['Wear', 'Try On', 'Edit', 'Plan']) await expect(actions.getByRole('button', { name: action, exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Delete Look' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Manage this Look' }).click();
  await expect(page.getByRole('dialog', { name: 'Manage this Look' }).getByRole('button', { name: 'Delete Look' })).toBeVisible();
});

test('core visual jobs lead with meaningful outfit or garment imagery', async ({ page }) => {
  const surfaces = [
    ['D-02', 'Coffee meeting outfit in warm natural daylight'],
    ['C-01', 'Soft tailoring inspiration'],
    ['K-01', 'Coffee meeting outfit'],
    ['L-01', 'Work outfit'],
    ['H-01', 'Style Twin preview in warm natural light'],
    ['F-01', 'Flat lay of selected outfit']
  ];

  for (const [id, imageName] of surfaces) {
    await page.goto(`/0.html#${id}`);
    const image = page.getByRole('img', { name: imageName, exact: true });
    await expect(image).toBeVisible();
    const box = await image.boundingBox();
    expect(box.width).toBeGreaterThan(100);
    expect(box.height).toBeGreaterThan(70);
  }
});

test('the remaining true empty state uses a large visual preview and one clear action', async ({ page }) => {
  await page.goto('/0.html#D-01');
  const image = page.getByRole('img', { name: 'From photo to outfit', exact: true });
  await expect(image).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add an item', exact: true })).toBeVisible();
  const box = await image.boundingBox();
  expect(box.height).toBeGreaterThan(250);
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('user-facing routes do not rely on generic Continue or Next buttons', async ({ page }) => {
  const ids = await page.locator('#screen-list [data-id]').evaluateAll(links =>
    links.map(link => link.dataset.id)
  );
  const genericActions = [];

  for (const id of ids) {
    await page.goto(`/0.html#${id}`);
    const labels = await page.locator('#app button').evaluateAll(buttons =>
      buttons.map(button => button.textContent.trim()).filter(label => /^(Continue|Next)$/i.test(label))
    );
    if (labels.length) genericActions.push({ id, labels });
  }

  expect(genericActions).toEqual([]);
});

test('saved Look visibility opens as a dismissible contextual sheet', async ({ page }) => {
  await page.goto('/0.html#G-02');
  await page.getByRole('button', { name: 'Manage this Look' }).click();
  await page.getByRole('dialog', { name: 'Manage this Look' }).getByRole('button', { name: /Visibility/ }).click();
  const dialog = page.getByRole('dialog', { name: 'Who can see this Look?' });
  await expect(dialog).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'G-02');
  await dialog.getByRole('button', { name: 'Close Who can see this Look?' }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Design Review' })).toBeVisible();
});

test('Planner day choices open in a sheet without leaving Planner', async ({ page }) => {
  await page.goto('/0.html#I-01');
  await page.getByRole('img', { name: 'Open outfit slot' }).click();
  const dialog = page.getByRole('dialog', { name: 'Plan this day' });
  await expect(dialog).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'I-01');
  await dialog.getByLabel('Describe the day').fill('Client dinner after work; polished but comfortable.');
  await dialog.getByRole('button', { name: 'Plan from my note' }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('status')).toContainText('Muse is planning from this day');
});

test('simple Look and profile fields edit in their original context', async ({ page }) => {
  await page.goto('/0.html#G-02');
  await page.locator('#app').getByText('Context & styling').click();
  await page.getByLabel('Look title').fill('Monday client review');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'G-02');
  await expect(page.getByRole('heading', { name: 'Design Review' })).toBeVisible();

  await page.goto('/0.html#L-01');
  await page.getByText('Profile details').click();
  await page.getByLabel('Profile location').fill('Cairo, Egypt');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'L-01');
  await expect(page.getByRole('heading', { name: 'Amelia Hart' })).toBeVisible();
});

test('Muse, Planner, and Trips accept intent in the user’s own words', async ({ page }) => {
  await page.goto('/0.html#M-01');
  await expect(page.getByLabel('Ask in your own words')).toBeVisible();

  await page.goto('/0.html#I-01');
  await page.getByRole('img', { name: 'Open outfit slot' }).click();
  await expect(page.getByLabel('Describe the day')).toBeVisible();
  await expect(page.getByText(/Prototype preview: Muse structures/)).toBeVisible();

  await page.goto('/0.html#J-02');
  await expect(page.getByLabel('Tell StyleIQ about the trip')).toHaveValue(/Three days in Alexandria/);
  await page.getByRole('button', { name: 'Structure my trip' }).click();
  await expect(page.getByRole('status')).toContainText('Trip details structured below');
  await expect(page.getByLabel('Trip start date')).toHaveValue('Aug 23');
});

test('Style Studio defaults to simple wardrobe actions and makes Create explicit', async ({ page }) => {
  await page.goto('/0.html#F-01');
  await expect(page.getByRole('img', { name: 'Flat lay of selected outfit' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Simple Everyday changes/ })).toHaveAttribute('aria-pressed', 'true');
  const simple = page.getByLabel('Simple wardrobe actions');
  for (const action of ['Swap top', 'Swap bottoms', 'Swap shoes', 'Add layer', 'Add accessory', 'Ask Muse']) {
    await expect(simple.getByRole('button', { name: action, exact: true })).toBeVisible();
  }
  await expect(page.getByLabel('Advanced Look layers')).toHaveCount(0);
  await page.getByRole('button', { name: /Create Advanced control/ }).click();
  await expect(page.getByLabel('Advanced Look layers')).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
});

test('lightweight contextual chips are readable, reversible, and stay in place', async ({ page }) => {
  await page.goto('/0.html#D-04');
  const occasion = page.getByRole('group', { name: 'Outfit occasion' });
  const party = occasion.getByRole('button', { name: 'Party' });
  await party.click();
  await expect(party).toHaveAttribute('aria-pressed', 'true');
  await expect(occasion.getByRole('button', { name: 'Business casual' })).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');

  await page.goto('/0.html#J-02');
  const context = page.getByRole('group', { name: 'Trip context' });
  await context.getByRole('button', { name: 'Work' }).click();
  await expect(context.getByRole('button', { name: 'Work' })).toHaveAttribute('aria-pressed', 'true');
});

test('gestures accelerate alternatives while visible controls remain available', async ({ page }) => {
  await page.goto('/0.html#D-04');
  const preview = page.getByLabel('Outfit preview. Swipe or use arrow keys for another occasion.');
  await preview.focus();
  await preview.press('ArrowRight');
  await expect(page.getByRole('button', { name: 'Party' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');

  await page.goto('/0.html#G-02');
  const look = page.getByLabel('Saved Look preview. Press and hold for quick share.');
  await look.dispatchEvent('pointerdown', { pointerType: 'touch' });
  await page.waitForTimeout(600);
  await expect(page.getByRole('dialog', { name: 'Create a private link' })).toBeVisible();
});

test('Create mode reorders the same draft and preserves it when returning to Simple', async ({ page }) => {
  await page.goto('/0.html#F-01');
  await page.getByRole('button', { name: /Create Advanced control/ }).click();
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')).items.map(item => item.role));
  await page.getByRole('button', { name: 'Move Top down' }).click();
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')).items.map(item => item.role));
  expect(after).not.toEqual(before);
  await page.getByRole('button', { name: /Simple Everyday changes/ }).click();
  const preserved = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')).items.map(item => item.role));
  expect(preserved).toEqual(after);
});

test('Style Twin reaches first value in four meaningful steps for both setup methods', async ({ page }) => {
  for (const method of ['Use my photos', 'Create without personal photos']) {
    await page.goto('/0.html#H-01');
    await page.getByRole('button', { name: new RegExp(`^${method}`) }).click();
    await expect(page.getByText('2 · Reference')).toBeVisible();
    await page.getByRole('button', { name: 'Use this reference' }).click();
    await expect(page.getByRole('heading', { name: 'Confirm the basics' })).toBeVisible();
    await page.getByRole('button', { name: 'Create first preview' }).click();
    await expect(page.getByRole('heading', { name: 'Your Style Twin is ready.' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Refine Style Twin' })).toBeVisible();
  }
});

test('Pose and tuck live after the first Style Twin result', async ({ page }) => {
  await page.goto('/0.html#H-10');
  await page.getByRole('button', { name: 'Refine Style Twin' }).click();
  await expect(page.getByRole('heading', { name: 'Fine-tune when it matters.' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Pose Standing/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Tuck No preference/ })).toBeVisible();
});

test('Closet and Discover initiate image search through the shared Lens state', async ({ page }) => {
  const entries = [
    ['C-01', 'Search Closet by image', 'Find owned alternatives'],
    ['K-02', 'Search Discover with an image', 'Shop my Closet']
  ];
  for (const [id, entry, intent] of entries) {
    await page.goto(`/0.html#${id}`);
    await page.getByRole('button', { name: new RegExp(entry) }).click();
    const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
    await expect(lens).toBeVisible();
    await lens.getByRole('button', { name: new RegExp(intent) }).click();
    await expect(lens.getByRole('region', { name: 'Owned visual matches' })).toBeVisible();
    await expect(lens.locator('.lens-match').first()).toContainText(/similar/i);
    await lens.getByRole('button', { name: 'Close StyleIQ Lens' }).click();
  }
});

test('styling intelligence stays beside the decision it explains', async ({ page }) => {
  await page.goto('/0.html#D-02');
  await page.getByText('Why this Look works').click();
  await expect(page.getByText(/light layer handles the cooler morning/)).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');

  await page.goto('/0.html#C-06');
  await page.getByText('Useful in your wardrobe').click();
  await expect(page.getByText(/connects your office, dinner, and travel pieces/)).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-06');
});

test('Today launches common jobs without requiring feature knowledge', async ({ page }) => {
  const jobs = [
    ['Dress me', 'D-04'],
    ['Should I buy this?', 'K-02'],
    ['Recreate a Look', 'F-01'],
    ['Help me pack', 'J-01'],
    ['What goes with this?', 'C-02']
  ];

  for (const [label, id] of jobs) {
    await page.goto('/0.html#D-02');
    await page.getByRole('region', { name: 'Start with your goal' }).getByRole('button', { name: label, exact: true }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('new interaction patterns inherit the editorial material system and semantic color tokens', async ({ page }) => {
  await page.goto('/0.html#B-06');
  const approval = page.locator('.approval-card');
  await expect(approval).toBeVisible();
  await page.evaluate(() => document.documentElement.style.setProperty('--success-soft', 'rgb(1, 2, 3)'));
  await expect(approval).toHaveCSS('background-color', 'rgb(1, 2, 3)');

  await page.goto('/0.html#D-02');
  const heading = page.getByRole('heading', { name: 'Good morning, Amelia' });
  await expect(heading).toHaveCSS('font-family', /Playfair Display/);
  await page.getByRole('button', { name: 'Save outfit' }).click();
  const sheet = page.getByRole('dialog', { name: 'Save this Look' });
  await page.evaluate(() => document.documentElement.style.setProperty('--sheet-surface', 'rgb(4, 5, 6)'));
  await expect(sheet).toHaveCSS('background-color', 'rgb(4, 5, 6)');
  await expect(sheet).toHaveCSS('border-top-left-radius', '28px');
});

test('one styling context choice is concise, persisted, and reused by its legacy edit alias', async ({ page }) => {
  await page.goto('/0.html#S-02');
  await expect(page.getByRole('heading', { name: 'Which wardrobe should Muse style?' })).toBeVisible();
  const group = page.getByRole('group', { name: 'Styling context' });
  await expect(group.getByRole('button')).toHaveCount(3);
  await expect(group.getByRole('button', { name: /Womenswear/ })).toBeVisible();
  await expect(group.getByRole('button', { name: /Menswear/ })).toBeVisible();
  await expect(group.getByRole('button', { name: /Both/ })).toBeVisible();
  await expect(page.getByText(/Someone else/)).toHaveCount(0);
  await expect(page.getByText(/not an identity question/)).toBeVisible();

  await group.getByRole('button', { name: /Menswear/ }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'A-01');
  await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqStylingContextV1'))).toBe('Menswear');

  await page.goto('/0.html#A-06');
  const editGroup = page.getByRole('group', { name: 'Styling context' });
  await expect(editGroup.getByRole('button', { name: /Menswear/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(editGroup.getByRole('button')).toHaveCount(3);
  await editGroup.getByRole('button', { name: /Both/ }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'L-04');
  await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqStylingContextV1'))).toBe('Both');
});

test('minimum onboarding excludes occupation, attribution, brands, and Style Twin', async ({ page }) => {
  const visited = [];
  await page.goto('/0.html#A-01');
  visited.push(await page.locator('#app').getAttribute('data-screen'));
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  visited.push(await page.locator('#app').getAttribute('data-screen'));
  await page.getByRole('button', { name: 'Use this name' }).click();
  visited.push(await page.locator('#app').getAttribute('data-screen'));
  await page.getByRole('button', { name: 'Create my account' }).click();
  visited.push(await page.locator('#app').getAttribute('data-screen'));
  await page.getByRole('button', { name: 'Verify email', exact: true }).click();
  visited.push(await page.locator('#app').getAttribute('data-screen'));

  expect(visited).toEqual(['A-01', 'A-02', 'A-03', 'A-04', 'A-05']);
  expect(visited).not.toEqual(expect.arrayContaining(['A-06', 'A-07', 'A-08', 'A-09', 'A-10']));
  await expect(page.locator('#app').getByText(/Occupation|How did you hear|Favorite brands/i)).toHaveCount(0);
});

test('the onboarding goal opens its useful destination immediately', async ({ page }) => {
  const goals = [
    ['Wear more of my Closet', 'D-02'],
    ['Plan outfits for my week', 'I-01'],
    ['Pack for a trip', 'J-01'],
    ['Decide what is worth buying', 'K-02']
  ];

  for (const [label, id] of goals) {
    await page.goto('/0.html#A-01');
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
    await page.getByRole('button', { name: new RegExp(label) }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
  }
});

test('a completed onboarding returns straight to useful Today value', async ({ page }) => {
  await page.goto('/0.html#A-05');
  await page.getByRole('button', { name: /Wear more of my Closet/ }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
  await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqOnboardingCompleteV1'))).toBe('true');

  await page.goto('/0.html#S-00');
  await page.getByRole('button', { name: 'Open StyleIQ' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
});

test('legacy outfit-action hashes open canonical sheets or canonical jobs', async ({ page }) => {
  const sheets = [
    ['E-01', 'Save this Look'],
    ['E-03', 'What missed?'],
    ['E-04', 'Create a private link']
  ];

  for (const [id, dialogName] of sheets) {
    await page.goto(`/0.html#${id}`);
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
    await expect(page.getByRole('heading', { name: 'Five ways to wear it' })).toBeVisible();
    const dialog = page.getByRole('dialog', { name: dialogName });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: new RegExp(`Close ${dialogName}`, 'i') }).click();
    await expect(dialog).toHaveCount(0);
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }

  for (const [id, heading] of [['E-02', 'Design Review'], ['E-05', 'Create your Style Twin'], ['E-06', 'Five ways to wear it']]) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    if (id === 'E-02') await expect(page.getByRole('group', { name: 'Studio mode' })).toBeVisible();
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('occupation is absent and the profile edit hash renders the canonical inline editor', async ({ page }) => {
  await page.goto('/0.html#L-02');
  await expect(page.getByRole('heading', { name: 'Amelia Hart', level: 2 })).toBeVisible();
  await expect(page.locator('#app').getByText('Profile details', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Profile name')).toHaveValue('Amelia Hart');
  await expect(page.locator('#app').getByText(/Occupation/i)).toHaveCount(0);

  await page.goto('/0.html#L-04');
  await expect(page.locator('#app').getByText(/Occupation/i)).toHaveCount(0);
  await expect(page.locator('#screen-list').getByText(/Occupation/i)).toHaveCount(0);
});

test('Style Twin begins only from intentional Try On and remains optional', async ({ page }) => {
  await page.goto('/0.html#D-02');
  await page.locator('#app').getByRole('button', { name: 'Try On', exact: true }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'H-01');
  await expect(page.getByRole('heading', { name: 'Create your Style Twin' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Skip for now/ })).toBeVisible();

  await page.goto('/0.html#D-02');
  await page.getByRole('button', { name: 'Make From My Closet' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
});

test('Closet keeps one coherent layout from 1 to 100+ pieces', async ({ page }) => {
  await page.goto('/0.html#C-01');
  for (const size of [1, 10, 101]) {
    await page.evaluate(count => window.setClosetDemoSize(count), size);
    await expect(page.locator('.closet-results-head').getByRole('heading', { name: `${size} piece${size === 1 ? '' : 's'}` })).toBeVisible();
    await expect(page.locator('.closet-item')).toHaveCount(size);
    const overflow = await page.evaluate(() => ({
      app: document.getElementById('app').scrollWidth > document.getElementById('app').clientWidth + 1,
      document: document.documentElement.scrollWidth > window.innerWidth + 1
    }));
    expect(overflow).toEqual({ app: false, document: false });
  }
});

test('empty Closet prioritizes one useful action and retains import and Wishlist paths', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.evaluate(() => window.setClosetDemoSize(0));
  await expect(page.getByRole('heading', { name: 'Start with one piece.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add your first item' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Import purchases' })).toBeVisible();
  await page.getByRole('button', { name: 'Open Wishlist' }).click();
  await expect(page.getByRole('heading', { name: 'Wishlist' })).toBeVisible();
});

test('large Closet search, category, collection, and sorting stay on the canonical surface', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.evaluate(() => window.setClosetDemoSize(101));
  await page.getByRole('searchbox', { name: 'Search Closet' }).fill('Balmain');
  await expect(page.locator('.closet-item')).toHaveCount(9);
  await page.evaluate(() => window.resetClosetFilters());
  await page.getByRole('button', { name: 'Outerwear', exact: true }).click();
  await expect(page.locator('.closet-item')).toHaveCount(17);
  await page.getByRole('button', { name: /Needs attention/ }).click();
  await expect(page.locator('.closet-item')).toHaveCount(8);
  await page.getByRole('button', { name: 'Sort: Recently added' }).click();
  await expect(page.getByRole('button', { name: 'Sort: Most worn' })).toBeVisible();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-01');
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('Closet is an owned-item wardrobe rather than a readiness dashboard', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await expect(page.locator('.closet-item')).toHaveCount(12);
  await expect(page.locator('.closet-item').first()).toBeInViewport();
  await expect(page.locator('#app').getByText(/readiness|analytics/i)).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Add an item' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search Closet', exact: true })).toBeVisible();
  await page.getByRole('button', { name: /Black tailored blazer Available/ }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-02');
  await expect(page.getByRole('heading', { name: 'Black tailored blazer' })).toBeVisible();
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-01');
});

test('Closet exposes complete shared-wardrobe categories from item metadata', async ({ page }) => {
  await page.goto('/0.html#C-01');
  const categories = ['All', 'Tops', 'Bottoms', 'Dresses & Suits', 'Outerwear', 'Shoes', 'Bags', 'Accessories'];
  const rail = page.getByRole('group', { name: 'Closet categories' });
  for (const category of categories) {
    await expect(rail.getByRole('button', { name: category, exact: true })).toBeVisible();
  }
  await rail.getByRole('button', { name: 'Dresses & Suits', exact: true }).click();
  await expect(page.locator('.closet-item')).toHaveCount(1);
  await expect(page.getByRole('button', { name: /Navy tailored suit/ })).toBeVisible();
  await expect(rail.getByRole('button', { name: 'Dresses & Suits', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('item lifecycle is mutually exclusive, persistent, and keeps item metadata', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.evaluate(() => localStorage.removeItem('styleiqClosetLifecycleV1'));
  await page.reload();
  await page.getByRole('button', { name: /Black tailored blazer Available/ }).click();
  const statuses = page.getByRole('group', { name: 'Item lifecycle status' });
  await expect(statuses.getByRole('button')).toHaveCount(6);
  await statuses.getByRole('button', { name: 'Sell', exact: true }).click();
  await expect(statuses.getByRole('button', { name: 'Sell', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(statuses.getByRole('button', { name: 'Keep', exact: true })).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByRole('heading', { name: 'Black tailored blazer' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Brand' })).toHaveValue('Balmain');
  await expect(page.getByText('Worn 3 times')).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Sell', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('lifecycle changes surface in Closet collections without a new screen', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.evaluate(() => localStorage.removeItem('styleiqClosetLifecycleV1'));
  await page.reload();
  await page.getByRole('button', { name: /Black tailored blazer Available/ }).click();
  await page.getByRole('button', { name: 'Donate', exact: true }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-01');
  await expect(page.getByRole('button', { name: /Black tailored blazer Donate/ })).toBeVisible();
  await page.getByRole('group', { name: 'Smart collections' }).getByRole('button', { name: /Donate/ }).click();
  await expect(page.locator('.closet-item')).toHaveCount(1);
  await expect(page.locator('#app .screen')).toHaveCount(1);
});

test('smart collections expose favorites, underused pieces, and each lifecycle intent', async ({ page }) => {
  await page.goto('/0.html#C-01');
  await page.evaluate(() => localStorage.removeItem('styleiqClosetLifecycleV1'));
  await page.reload();
  const collections = page.getByRole('group', { name: 'Smart collections' });
  for (const name of ['Favorites', 'Underused', 'Won’t wear', 'Sell', 'Donate', 'Rent', 'Archived']) {
    await expect(collections.getByRole('button', { name: new RegExp(name) })).toBeVisible();
  }
  await collections.getByRole('button', { name: /Favorites 2 pieces/ }).click();
  await expect(page.locator('.closet-item')).toHaveCount(2);
  await page.evaluate(() => window.resetClosetFilters());
  await collections.getByRole('button', { name: /Underused 2 pieces/ }).click();
  await expect(page.locator('.closet-item')).toHaveCount(2);
});

test('all legacy item routes resolve to one progressive Item Detail surface', async ({ page }) => {
  for (const id of ['C-02', 'C-03', 'C-04', 'C-05', 'C-06', 'C-07']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: 'Black tailored blazer' })).toBeVisible();
    await expect(page.locator('#app').getByRole('button', { name: 'Style this item', exact: true })).toHaveCount(1);
    await expect(page.getByRole('textbox', { name: 'Brand' })).toHaveValue('Balmain');
    await expect(page.getByText('Cost / wear')).toBeAttached();
    await expect(page.getByText('Compatible Looks')).toBeAttached();
    await expect(page.getByText('Item actions')).toBeAttached();
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('Item Detail keeps styling primary and photo tools in a dismissible sheet', async ({ page }) => {
  await page.goto('/0.html#C-02');
  const primary = page.locator('#app').getByRole('button', { name: 'Style this item', exact: true });
  await expect(primary).toBeVisible();
  const precedesMetadata = await primary.evaluate(button => Boolean(button.compareDocumentPosition(document.querySelector('.inline-edit-grid')) & Node.DOCUMENT_POSITION_FOLLOWING));
  expect(precedesMetadata).toBeTruthy();
  await page.getByRole('button', { name: 'Edit item photo' }).click();
  const sheet = page.getByRole('dialog', { name: 'Edit without leaving' });
  await expect(sheet).toBeVisible();
  await sheet.getByRole('button', { name: 'Crop' }).click();
  await expect(sheet.getByRole('button', { name: 'Crop' })).toHaveAttribute('aria-pressed', 'true');
  await sheet.getByRole('button', { name: 'Close Edit without leaving' }).click();
  await expect(sheet).toHaveCount(0);
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-02');
  await primary.click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');
});

test('Planner turns one natural-language intent into a persistent interpreted plan', async ({ page }) => {
  await page.goto('/0.html#I-01');
  await page.evaluate(() => localStorage.removeItem('styleiqPlannerIntentV1'));
  await page.reload();
  await page.getByRole('button', { name: 'Describe my day' }).click();
  const sheet = page.getByRole('dialog', { name: 'Plan this day' });
  await sheet.getByLabel('Describe the day').fill('Client presentation at 10, drinks after work.');
  await sheet.getByRole('button', { name: 'Plan from my note' }).click();
  await expect(page.getByRole('img', { name: 'Planned client presentation and drinks outfit' })).toBeVisible();
  await expect(page.getByText('Client presentation + drinks')).toBeVisible();
  await expect(page.getByText(/10:00 AM.*Polished, comfortable/)).toBeVisible();
  await page.reload();
  await expect(page.getByText('Client presentation + drinks')).toBeVisible();
});

test('legacy Planner form routes resolve to the same intent-first surface', async ({ page }) => {
  for (const id of ['I-03', 'I-04', 'I-05']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: 'What are you dressing for?' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Event title' })).toHaveCount(0);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('Trip planning is a three-stage natural-language journey with one generated hub', async ({ page }) => {
  await page.goto('/0.html#J-02');
  const progress = page.getByLabel('Trip progress');
  await expect(progress.locator('span')).toHaveCount(3);
  await expect(page.getByLabel('Tell StyleIQ about the trip')).toHaveValue(/Alexandria/);
  await expect(page.getByText('Review interpreted details')).toBeVisible();
  await page.getByRole('button', { name: 'Build packing & Looks' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'J-08');
  await expect(page.getByRole('heading', { name: 'Your trip is ready' })).toBeVisible();
  await expect(page.locator('#app').getByRole('button', { name: 'Packing', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Outfits' }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'J-10');
  await expect(page.getByRole('img', { name: 'Aug 24 Museum trip Look' })).toBeVisible();
});

test('legacy Trip setup routes collapse into the shared description step', async ({ page }) => {
  for (const id of ['J-03', 'J-04', 'J-05', 'J-06', 'J-07']) {
    await page.goto(`/0.html#${id}`);
    await expect(page.getByRole('heading', { name: 'Where are you going?' })).toBeVisible();
    await expect(page.getByLabel('Trip progress').locator('span')).toHaveCount(3);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('compatibility-only route families render their canonical user job', async ({ page }) => {
  const cases = [
    ['A-13', 'Wardrobe · 12 pieces'],
    ['A-14', 'Canonical collection'],
    ['A-15', 'Where are you going?'],
    ...['F-02', 'F-03', 'F-04', 'F-05', 'F-06', 'F-07', 'F-08', 'F-09', 'F-10', 'F-11'].map(id => [id, 'Style Studio']),
    ...['G-03', 'G-04', 'G-05', 'G-06', 'G-07', 'G-08'].map(id => [id, 'Created by Me']),
    ...['J-09', 'J-13', 'J-14'].map(id => [id, 'Your trip is ready']),
    ...['J-11', 'J-12'].map(id => [id, 'Your trip is ready'])
  ];

  for (const [id, canonicalCopy] of cases) {
    await page.goto(`/0.html#${id}`);
    await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
    await expect(page.locator('#app')).toContainText(canonicalCopy);
    await expect(page.locator('#app .screen')).toHaveCount(1);
  }
});

test('Weekly recap uses concrete wardrobe behavior and prepares next week directly', async ({ page }) => {
  await page.goto('/0.html#I-02');
  const metrics = page.getByLabel('Weekly wardrobe metrics');
  await expect(metrics.getByText('outfits worn')).toBeVisible();
  await expect(metrics.getByText('Closet pieces used')).toBeVisible();
  await expect(metrics.getByText('underused pieces rediscovered')).toBeVisible();
  await expect(metrics.getByText(/most worn/)).toBeVisible();
  await expect(page.getByRole('img', { name: 'New blazer and silk shell combination' })).toBeVisible();
  await expect(page.locator('#app').getByText(/Style Score|Closet readiness|streak/i)).toHaveCount(0);
  await page.getByRole('button', { name: /Prepare next week’s Looks|Review next week’s Looks/ }).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen', 'I-01');
  await expect(page.getByRole('heading', { name: 'Next week' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Wednesday Client review Look' })).toBeVisible();
});

test('Weekly recap is discoverable from Today and Profile without a nested flow', async ({ page }) => {
  for (const id of ['D-02', 'L-01']) {
    await page.goto(`/0.html#${id}`);
    await page.getByRole('button', { name: /Your week in clothes/ }).click();
    await expect(page.locator('#app')).toHaveAttribute('data-screen', 'I-02');
    await expect(page.getByRole('heading', { name: 'Your wardrobe worked harder.' })).toBeVisible();
  }
});

test('final visual system keeps neutral editorial surfaces without decorative card gradients', async ({ page }) => {
  await page.goto('/0.html#I-02');
  const styles = await page.locator('.planner-intent-card').evaluate(element => {
    const value = getComputedStyle(element);
    return { backgroundImage: value.backgroundImage, boxShadow: value.boxShadow, backdropFilter: value.backdropFilter };
  });
  expect(styles.backgroundImage).toBe('none');
  expect(styles.boxShadow).not.toContain('0px 14px 34px');
  expect(styles.backdropFilter).toBe('none');
  await expect(page.getByRole('img', { name: 'Favorite outfit worn this week' })).toBeVisible();
  await expect(page.locator('body')).not.toContainText('ChatGPT');
});

test('provisional semantic color tokens drive shared surfaces without layout changes', async ({ page }) => {
  await page.goto('/0.html#G-02');
  const tokens = await page.evaluate(() => {
    const styles = getComputedStyle(document.documentElement);
    return ['--app-background','--surface','--surface-elevated','--text-primary','--text-secondary','--border','--accent','--accent-soft','--success','--warning','--danger','--overlay','--glass-surface','--glass-edge','--editor-surface-dark','--focus-ring'].map(name => [name, styles.getPropertyValue(name).trim()]);
  });
  for (const [name, value] of tokens) {
    expect(name).toMatch(/^--/);
    expect(value).not.toBe('');
  }
  const palette = Object.fromEntries(tokens);
  expect(palette['--accent']).toBe('#c89b45');
  expect(palette['--accent-soft']).toBe('#f5ead2');
  await page.evaluate(() => document.documentElement.style.setProperty('--surface', 'rgb(250, 240, 230)'));
  await expect(page.getByRole('button', { name: 'Wear', exact: true })).toHaveCSS('background-color', 'rgb(36, 29, 26)');
  await expect(page.getByRole('button', { name: 'Try On', exact: true })).toHaveCSS('background-color', 'rgb(250, 240, 230)');
});
