const {test,expect}=require('@playwright/test');

test('customer preview switch changes Profile entry and preserves both Twin flows',async({page})=>{
  // The reviewer controls are intentionally outside the mobile product screen.
  await page.setViewportSize({width:1500,height:1100});
  await page.goto('/1.html#L-01');
  const controls=page.locator('.twin-demo-controls');
  await controls.getByRole('button',{name:'Existing customer'}).click();
  await page.locator('.profile-utility').filter({hasText:'Style Twin'}).click();
  await expect(page.getByRole('heading',{name:'Your Style Twin',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Use my photos'})).toHaveCount(0);
  await page.getByRole('button',{name:'Refine Style Twin',exact:true}).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen','H-07');
  await page.getByRole('button',{name:'Back to Style Twin',exact:true}).click();
  await page.getByRole('button',{name:'Try a Look',exact:true}).click();
  await page.locator('.today-actions').getByRole('button',{name:'Try On',exact:true}).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen','E-06');
  await controls.getByRole('button',{name:'New customer'}).click();
  await expect(page.getByRole('heading',{name:'Create your Style Twin',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Skip for now'}).click();
  await page.locator('.profile-utility').filter({hasText:'Style Twin'}).click();
  await expect(page.getByRole('button',{name:'Use my photos'})).toBeVisible();
  await page.reload();
  await expect(controls.getByRole('button',{name:'New customer'})).toHaveAttribute('aria-pressed','true');
  await page.getByRole('button',{name:'Create without personal photos'}).click();
  await page.getByRole('button',{name:'Use this reference'}).click();
  await page.getByRole('button',{name:'Create first preview'}).click();
  await expect(page.getByRole('heading',{name:'Your Style Twin',exact:true})).toBeVisible();
  await expect(controls.getByRole('button',{name:'Existing customer'})).toHaveAttribute('aria-pressed','true');
});
