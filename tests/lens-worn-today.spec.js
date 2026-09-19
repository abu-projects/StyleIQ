const { test, expect } = require('@playwright/test');

const image = { name: 'outfit.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64') };
const secondImage = { name: 'outfit-2.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZPp8AAAAASUVORK5CYII=', 'base64') };

async function openWornToday(page) {
  await page.goto('/index.html?customer=existing#K-01');
  await page.getByRole('button', { name: 'Open StyleIQ Lens' }).click();
  await page.locator('#lens-library-input').setInputFiles(image);
  const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
  await expect(lens.getByRole('button', { name: /Worn This Today/ })).toBeVisible();
  await lens.getByRole('button', { name: /Worn This Today/ }).click();
  await expect(lens.getByRole('heading', { name: 'Is this the Look you wore?' })).toBeVisible();
  return lens;
}

async function seedAndOpenWearRecord(page) {
  await page.goto('/index.html?customer=existing#K-01');
  return page.evaluate(() => {
    const look = canonicalLook('office');
    const items = initialActualItems(look);
    const record = { id: 'wear-edit-test', lookId: look.id, date: wearTodayKey(), timestamp: '2026-09-19T10:00:00.000Z', source: 'lens', actualItems: structuredClone(items), modifications: [] };
    wearRecords = [record];
    updateWearItemCounts([], items);
    persistWear();
    openWearFlow(look.id, record.id);
    return { recordId: record.id, oldId: items[0].closetItemId };
  });
}

async function replaceFirstWearItem(page) {
  let sheet = page.getByRole('dialog', { name: 'Wear record' });
  await sheet.getByRole('button', { name: 'Edit actual items' }).click();
  sheet = page.getByRole('dialog', { name: 'What did you change?' });
  await sheet.locator('.wear-item').first().getByRole('button', { name: 'Replace' }).click();
  const picker = page.getByRole('dialog', { name: 'Choose a Closet piece' });
  const candidate = picker.locator('.wear-picker button').first();
  const name = (await candidate.locator('b').textContent()).trim();
  await candidate.click();
  await page.getByRole('dialog', { name: 'What did you change?' }).getByRole('button', { name: 'Confirm actual items' }).click();
  await expect(page.getByRole('dialog', { name: 'Save changes?' })).toBeVisible();
  return name;
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

test('Photo Library auto-continues and changing the image clears stale Lens state', async ({ page }) => {
  await page.goto('/index.html?customer=existing#K-01');
  await page.getByRole('button', { name: 'Open StyleIQ Lens' }).click();
  await page.locator('#lens-library-input').setInputFiles(image);
  const lens = page.getByRole('dialog', { name: 'StyleIQ Lens' });
  await expect(lens.getByRole('heading', { name: 'What should Lens do?' })).toBeVisible();
  await expect(lens.getByRole('button', { name: /Worn This Today/ })).toBeVisible();
  const first = await lens.getByRole('img', { name: 'Selected Lens input' }).getAttribute('src');
  await lens.getByRole('button', { name: 'Change', exact: true }).click();
  await page.locator('#lens-library-input').setInputFiles(secondImage);
  await expect(lens.getByRole('heading', { name: 'What should Lens do?' })).toBeVisible();
  const second = await lens.getByRole('img', { name: 'Selected Lens input' }).getAttribute('src');
  expect(second).not.toBe(first);
  await expect(lens.getByRole('heading', { name: 'Is this the Look you wore?' })).toHaveCount(0);
});

test('Lens matches an existing Look first and hands off to canonical Wear', async ({ page }) => {
  const lens = await openWornToday(page);
  await expect(lens.getByText('Soft Workday', { exact: true })).toBeVisible();
  await lens.getByRole('button', { name: 'Yes', exact: true }).click();
  const wear = page.getByRole('dialog', { name: 'Did you wear this look?' });
  await expect(wear).toBeVisible();
  await wear.getByRole('button', { name: 'Yes, as styled' }).click();
  await expect(page.getByRole('dialog', { name: 'What did you wear it for?' })).toBeVisible();
  const record = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqWearRecordsV1')).at(-1));
  expect(record.source).toBe('lens');
  expect(record.lookId).toBe('look-office-women');
});

test('Lens reconstructs, adjusts a missing piece, and confirms actual items', async ({ page }) => {
  const lens = await openWornToday(page);
  await lens.getByRole('button', { name: 'Something else' }).click();
  await expect(lens.getByRole('heading', { name: 'I found most of your outfit' })).toBeVisible();
  const shoes = lens.locator('.lens-worn-item').filter({ hasText: 'Shoes · Not matched yet' });
  await shoes.getByRole('button', { name: 'Choose from Closet' }).click();
  await lens.locator('.lens-closet-picker button').filter({ hasText: /trainers|loafers|pumps/i }).first().click();
  await lens.getByRole('button', { name: 'Confirm outfit' }).click();
  await expect(lens.getByRole('heading', { name: 'Is this what you wore?' })).toBeVisible();
  await lens.getByRole('button', { name: 'Yes, I wore this' }).click();
  await page.getByRole('dialog', { name: 'Did you wear this look?' }).getByRole('button', { name: 'Yes, as styled' }).click();
  const record = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqWearRecordsV1')).at(-1));
  expect(record.source).toBe('lens');
  expect(record.actualItems.some(item => item.role === 'Shoes' && item.closetItemId)).toBeTruthy();
  expect(record.lookSnapshot.title).toBe('Outfit from Lens');
});

test('a missing detected garment can use canonical Closet add and join the Wear Record', async ({ page }) => {
  const lens = await openWornToday(page);
  await lens.getByRole('button', { name: 'Something else' }).click();
  const shoes = lens.locator('.lens-worn-item').filter({ hasText: 'Shoes · Not matched yet' });
  await shoes.getByRole('button', { name: 'Add this item' }).click();
  await expect(lens.getByText('Shoes · Added to Closet')).toBeVisible();
  await lens.getByRole('button', { name: 'Confirm outfit' }).click();
  await lens.getByRole('button', { name: 'Yes, I wore this' }).click();
  await page.getByRole('dialog', { name: 'Did you wear this look?' }).getByRole('button', { name: 'Yes, as styled' }).click();
  const state = await page.evaluate(() => ({
    closet: JSON.parse(localStorage.getItem('styleiqClosetItemsV1')),
    record: JSON.parse(localStorage.getItem('styleiqWearRecordsV1')).at(-1),
  }));
  const added = state.closet.find(item => item.brand === 'Added with Lens');
  expect(added).toBeTruthy();
  expect(state.record.actualItems.some(item => item.closetItemId === added.id)).toBeTruthy();
});

test('reconstructed outfit Replace is category-aware and preserves the replacement Closet ID', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('styleiqStylingContextV1', 'Menswear'));
  const lens = await openWornToday(page);
  await lens.getByRole('button', { name: 'Something else' }).click();
  const blazer = lens.locator('.lens-worn-item').filter({ hasText: 'Brown herringbone blazer' });
  await blazer.getByRole('button', { name: 'Replace' }).click();
  await expect(lens.getByRole('heading', { name: 'Choose from Closet' })).toBeVisible();
  const replacement = lens.locator('.lens-closet-picker button').filter({ hasText: /Blazer|Outerwear|Jacket/ }).first();
  await expect(replacement).toBeVisible();
  const selectedName = (await replacement.locator('b').textContent()).trim();
  await replacement.click();
  await expect(lens.locator('.lens-worn-item').filter({ hasText: selectedName }).getByText(/Adjusted/)).toBeVisible();
  await lens.getByRole('button', { name: 'Confirm outfit' }).click();
  await lens.getByRole('button', { name: 'Yes, I wore this' }).click();
  await page.getByRole('dialog', { name: 'Did you wear this look?' }).getByRole('button', { name: 'Yes, as styled' }).click();
  const result = await page.evaluate(name => {
    const closet = [...document.querySelectorAll('body')].length && JSON.parse(localStorage.getItem('styleiqWearRecordsV1')).at(-1);
    return closet.actualItems.find(item => item.name === name);
  }, selectedName);
  expect(result.closetItemId).toBeTruthy();
});

test('replacement picker has a non-blocking empty state and full-Closet fallback', async ({ page }) => {
  await page.goto('/index.html?customer=existing#K-01');
  await page.evaluate(() => {
    const look = canonicalLook('office');
    openWearFlow(look.id, null, { look });
    wearFlow.items[0] = { originalLookItemId: 'hat', role: 'Headwear', originalName: 'Ceremonial hat', name: 'Ceremonial hat', image: look.image, closetItemId: null, worn: true };
    wearFlow.pickerIndex = 0; wearFlow.step = 'picker'; mountWearSheet();
  });
  const picker = page.getByRole('dialog', { name: 'Choose a Closet piece' });
  await expect(picker.getByText('No similar Closet pieces found')).toBeVisible();
  await expect(picker.getByRole('button', { name: 'Add this item' })).toBeVisible();
  await expect(picker.getByRole('button', { name: 'Skip this piece' })).toBeVisible();
  await expect(picker.getByRole('button', { name: 'Back to items' })).toBeVisible();
  await picker.getByRole('button', { name: 'View all matching Closet items' }).click();
  await expect(picker.getByText('No similar Closet pieces found')).toBeVisible();
});

test('shoe replacement suggestions never select a top from the Closet', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('styleiqStylingContextV1', 'Menswear'));
  await page.goto('/index.html?customer=existing#K-01');
  const state = await page.evaluate(() => {
    const look = canonicalLook('office');
    openWearFlow(look.id);
    wearFlow.step = 'edit';
    wearFlow.pickerIndex = wearFlow.items.findIndex(item => item.role === 'Shoes');
    wearFlow.step = 'picker';
    mountWearSheet();
    return { shoeId: wearFlow.items[wearFlow.pickerIndex].closetItemId };
  });
  const picker = page.getByRole('dialog', { name: 'Choose a Closet piece' });
  await expect(picker.locator('.wear-picker button').first()).toBeVisible();
  const categories = await picker.locator('.wear-picker button').evaluateAll(buttons => buttons.map(button => button.textContent));
  expect(categories.every(text => /Shoes|loafer|trainer|sneaker|boot/i.test(text))).toBeTruthy();
  const guarded = await page.evaluate(oldId => {
    const shirt = closetItems().find(item => normalizedWearCategory(item.category) === 'tops');
    replaceWearItem(shirt.id);
    return wearFlow.items[wearFlow.pickerIndex].closetItemId === oldId;
  }, state.shoeId);
  expect(guarded).toBeTruthy();
});

test('editing a saved Wear Record can Update Current without double-counting', async ({ page }) => {
  const seeded = await seedAndOpenWearRecord(page);
  const replacementName = await replaceFirstWearItem(page);
  const before = await page.evaluate(({ oldId, replacementName }) => {
    const replacement = closetItems().find(item => item.name === replacementName);
    return { old: closetItems().find(item => item.id === oldId).wears, next: replacement.wears, nextId: replacement.id };
  }, { oldId: seeded.oldId, replacementName });
  await page.getByRole('dialog', { name: 'Save changes?' }).getByRole('button', { name: 'Update Current' }).click();
  const after = await page.evaluate(({ recordId, oldId, nextId }) => ({
    records: JSON.parse(localStorage.getItem('styleiqWearRecordsV1')),
    old: closetItems().find(item => item.id === oldId).wears,
    next: closetItems().find(item => item.id === nextId).wears,
    recordId,
  }), { recordId: seeded.recordId, oldId: seeded.oldId, nextId: before.nextId });
  expect(after.records).toHaveLength(1);
  expect(after.records[0].id).toBe(seeded.recordId);
  expect(after.records[0].actualItems[0].closetItemId).toBe(before.nextId);
  expect(after.old).toBe(before.old - 1);
  expect(after.next).toBe(before.next + 1);
});

test('editing a saved Wear Record can Save as New without altering the original', async ({ page }) => {
  const seeded = await seedAndOpenWearRecord(page);
  const original = await page.evaluate(() => structuredClone(wearRecords[0]));
  const replacementName = await replaceFirstWearItem(page);
  const replacement = await page.evaluate(name => {
    const item = closetItems().find(piece => piece.name === name);
    return { id: item.id, wears: item.wears };
  }, replacementName);
  await page.getByRole('dialog', { name: 'Save changes?' }).getByRole('button', { name: 'Save as New' }).click();
  const after = await page.evaluate(id => ({ records: JSON.parse(localStorage.getItem('styleiqWearRecordsV1')), wears: closetItems().find(item => item.id === id).wears }), replacement.id);
  expect(after.records).toHaveLength(2);
  expect(after.records[0]).toEqual(original);
  expect(after.records[1].id).not.toBe(seeded.recordId);
  expect(after.records[1].actualItems[0].closetItemId).toBe(replacement.id);
  expect(after.wears).toBe(replacement.wears + 1);
});

test('editing a saved Wear Record can Discard Changes without changing data or statistics', async ({ page }) => {
  await seedAndOpenWearRecord(page);
  const original = await page.evaluate(() => ({ record: structuredClone(wearRecords[0]), wears: closetItems().map(item => [item.id, item.wears]) }));
  await replaceFirstWearItem(page);
  await page.getByRole('dialog', { name: 'Save changes?' }).getByRole('button', { name: 'Discard Changes' }).click();
  const after = await page.evaluate(() => ({ records: JSON.parse(localStorage.getItem('styleiqWearRecordsV1')), wears: closetItems().map(item => [item.id, item.wears]) }));
  expect(after.records).toEqual([original.record]);
  expect(after.wears).toEqual(original.wears);
});
