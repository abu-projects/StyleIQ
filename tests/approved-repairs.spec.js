const { test, expect } = require('@playwright/test');
const app = page => page.locator('#app');
const button = (page, name) => app(page).getByRole('button', { name, exact: true });

test('duplicate photo replacement updates the existing item and survives reload', async ({ page }) => {
  await page.goto('/index.html#B-07');
  await app(page).getByText('Choose a different issue', { exact: true }).click();
  await button(page, 'Likely duplicate').click();
  await button(page, 'Replace / update existing photo').click();
  await button(page, 'Crop').click();
  await button(page, 'Save photo').click();
  await expect(app(page).getByRole('dialog')).toHaveCount(0);
  const before = await app(page).locator('.hero-img').getAttribute('src');
  expect(before).toMatch(/^data:image\/png/);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqClosetItemsV1') || '[]'))).toHaveLength(0);
  await page.reload();
  await expect(app(page).locator('.hero-img')).toHaveAttribute('src', before);
  await app(page).getByRole('tab', { name: 'Photos', exact: true }).click();
  await button(page, 'Edit item photo').click();
  await button(page, 'Original').click();
  await button(page, 'Save photo').click();
  await expect(app(page).locator('.hero-img')).toHaveAttribute('src', 'images/item_blazer.png');
});

test('mixed receipt keeps ready purchases and saves only corrected uncertain fields', async ({ page }) => {
  await page.goto('/index.html#B-09');
  await button(page, 'Preview mixed receipt').click();
  await app(page).getByLabel('Missing item information').fill('Blue raincoat');
  await button(page, 'Save uncertain item').click();
  await button(page, 'Add 3 ready purchases').click();
  await page.reload();
  const owned = await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqClosetItemsV1')));
  expect(owned.map(item => item.name).sort()).toEqual(['Blue raincoat', 'Leather loafers', 'Silk shell']);
  expect(owned.every(item => item.source === 'receipt-import')).toBe(true);
});

test('receipt import can save ready items first and resume the remaining draft', async ({ page }) => {
  await page.goto('/index.html#B-09');
  await button(page, 'Preview mixed receipt').click();
  await button(page, 'Add 2 ready purchases').click();
  await page.goto('/index.html#B-09'); await page.reload();
  await button(page, 'Resume receipt import').click();
  await app(page).getByLabel('Missing item information').fill('Blue raincoat');
  await button(page, 'Save uncertain item').click();
  await button(page, 'Add 1 ready purchases').click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqClosetItemsV1')).length)).toBe(3);
});

for (const [scenario,name] of [['complete','Silk shell'],['manual','Red boots']]) test(`receipt ${scenario} passes its item into canonical Closet confirmation`, async ({ page }) => {
  await page.goto('/index.html#B-09');
  if (scenario === 'complete') {
    await button(page, 'Preview complete receipt').click();
    await button(page, 'Review purchase').click();
  } else {
    await button(page, 'Preview failed receipt').click();
    await button(page, 'Enter purchase manually').click();
    await app(page).getByLabel('Purchase name', { exact: true }).fill(name);
    await button(page, 'Continue manually').click();
  }
  await expect(app(page).getByLabel('Item name', { exact: true })).toHaveValue(name);
  await button(page, 'Looks right · Add').click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('styleiqClosetItemsV1')))).toEqual([expect.objectContaining({name, source:'receipt-import'})]);
});

test('OTP enforces resend and retry timers while retaining the account', async ({ page }) => {
  await page.goto('/index.html#A-03');
  await app(page).getByLabel('Email address', { exact: true }).fill('wardrobe@example.com');
  await button(page, 'Create my account').click();
  await page.clock.install();
  await expect(button(page, 'Resend code')).toBeDisabled();
  await page.clock.fastForward(29000);
  await expect(button(page, 'Resend code')).toBeEnabled();
  await button(page, 'Resend code').click();
  await expect(button(page, 'Resend code')).toBeDisabled();
  for (let attempt = 0; attempt < 3; attempt++) await button(page, 'Verify email').click();
  await expect(button(page, 'Verify email')).toBeDisabled();
  await expect(button(page, 'Resend code')).toBeDisabled();
  await page.clock.fastForward(61000);
  await expect(button(page, 'Verify email')).toBeEnabled();
  await expect(app(page)).toContainText('wardrobe@example.com');
  for (const [index,digit] of [...'123456'].entries()) await app(page).getByLabel(`Digit ${index+1}`, {exact:true}).fill(digit);
  await button(page, 'Verify email').click();
  await expect(app(page)).toHaveAttribute('data-screen','A-05');
});

test('the same search preserves owned-item intent and shopping actions', async ({ page }) => {
  await page.goto('/index.html#B-04');
  await app(page).getByLabel('Product or brand', {exact:true}).fill('shoulder');
  await button(page, 'Search My Item').click();
  await expect(app(page).locator('[data-wishlist-heart]')).toHaveCount(0);
  await button(page, 'Add to My Closet').click();
  await expect(app(page).getByLabel('Item name', {exact:true})).toHaveValue('Leather Shoulder Bag');
  await expect(app(page).getByLabel('Brand', {exact:true})).toHaveValue('Cuyana');
  await button(page, 'Looks right · Add').click();
  await page.goto('/index.html#K-02');
  await app(page).getByLabel('Search products', {exact:true}).fill('shoulder');
  await button(page, 'Save to Wishlist').click();
  await button(page, 'Check this piece').click();
  await expect(app(page)).toHaveAttribute('data-screen','G-09');
  await expect(app(page)).toContainText('Leather Shoulder Bag');
  const state = await page.evaluate(()=>({closet:JSON.parse(localStorage.getItem('styleiqClosetItemsV1')), wishlist:JSON.parse(localStorage.getItem('styleiqWishlistV1'))}));
  expect(state.closet).toHaveLength(1);
  expect(state.closet[0]).toMatchObject({name:'Leather Shoulder Bag',category:'Bags',source:'owned-search'});
  expect(state.wishlist.some(item=>item.id==='shoulder-bag')).toBe(true);
});

test('item edits and wear count persist and Try On carries the selected item', async ({ page }) => {
  await page.goto('/index.html#C-02');
  const wears = Number((await app(page).locator('.item-metric').first().innerText()).split('×')[0]);
  await button(page,'Mark Worn').click();
  await app(page).getByRole('tab',{name:'Details',exact:true}).click();
  await app(page).getByLabel('Name',{exact:true}).fill('Blue travel coat');
  await button(page,'Save item details').click();
  await app(page).getByRole('tab',{name:'Purchase Info',exact:true}).click();
  await app(page).getByLabel('Purchase price',{exact:true}).fill('120');
  await app(page).getByLabel('Purchase date',{exact:true}).fill('2026-08-20');
  await button(page,'Save purchase details').click();
  await page.reload();
  await expect(app(page).getByRole('heading',{name:'Blue travel coat',exact:true})).toBeVisible();
  await expect(app(page).locator('.item-metric').first()).toContainText(`${wears+1}×`);
  await expect(app(page).locator('.item-metric').nth(2)).toContainText('0');
  await button(page,'Try On').click();
  const intent = await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqPendingTryOnV1')));
  expect(intent.closetItemId).toBe('closet-1');
  expect(intent.selectedLook.pieces.some(piece=>piece[1]==='Blue travel coat')).toBe(true);
  expect(intent.lookId).not.toBe('coffee');
  await page.reload();
  await app(page).getByRole('button',{name:'Create without personal photos'}).click();
  await button(page,'Use this reference').click();
  await button(page,'Create first preview').click();
  await expect(app(page)).toHaveAttribute('data-screen','E-06');
  await page.reload();
  const result = await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqTryOnResultV1')));
  expect(result.closetItemId).toBe(intent.closetItemId);
  await expect(app(page).getByRole('heading',{name:'Blue travel coat · Try On',exact:true})).toBeVisible();
});

test('weekly context and Look changes update only the selected suggestion', async ({ page }) => {
  await page.goto('/index.html#I-01');
  await button(page,'Plan My Week').click();
  const before = await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqProactiveWeekV1')));
  await button(page,'Change Look').first().click();
  const changed = await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqProactiveWeekV1')));
  expect(changed[0].lookId).not.toBe(before[0].lookId);
  expect(changed[0].image).not.toBe(before[0].image);
  await button(page,'Edit context').first().click();
  await expect(app(page).locator('#planner-event-occasion')).toHaveValue('Work');
  await app(page).locator('#planner-event-occasion').selectOption('Dinner');
  await app(page).locator('#planner-event-title').fill('Team dinner');
  await button(page,'Review event').click();
  await button(page,'Choose a Look').click();
  await button(page,'Save to Planner').click();
  await page.reload();
  const saved = await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqProactiveWeekV1')));
  expect(saved[0]).toMatchObject({context:'Dinner',title:'Team dinner',lookId:changed[0].lookId});
  expect(saved.slice(1)).toEqual(before.slice(1));
  await expect(button(page,'Add Event')).toBeVisible();
});

for (const [end,days] of [['2099-09-02',2],['2099-09-05',5]]) test(`trip dates produce ${days} matching day and outfit entries`, async ({ page }) => {
  await page.goto('/index.html#J-02');
  await app(page).locator('#trip-destination').fill('Lisbon');
  await app(page).locator('#trip-start-date').fill('2099-09-01');
  await app(page).locator('#trip-end-date').fill(end);
  await button(page,'Choose vibe & activities').click();
  await button(page,'Create My Packing Plan').click();
  await button(page,'Open completed trip').click();
  const summary = await app(page).locator('[data-trip-summary]').innerText();
  expect(summary).toBe(`${days} days · 6 pieces · ${days} outfits`);
  await button(page,'Outfits').click();
  await expect(app(page).locator('.stack > .card')).toHaveCount(days);
  await expect(app(page)).toContainText(end);
  await expect(app(page)).not.toContainText('Aug 23');
  await button(page,'Days').click();
  await expect(app(page).locator('.stack > .card')).toHaveCount(days);
  await page.reload();
  await expect(app(page).locator('[data-trip-summary]')).toHaveText(summary);
});
