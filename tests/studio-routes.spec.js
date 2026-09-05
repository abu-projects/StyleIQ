const {test,expect}=require('@playwright/test');

test('F routes open their requested tools while retaining the same recreation draft',async({page})=>{
  await page.goto('/1.html#D-02');
  await page.locator('.today-look-card').filter({hasText:'Soft Tailoring'}).click();
  await page.locator('.today-actions').getByRole('button',{name:'Make it mine'}).click();
  const navigate=async id=>{await page.evaluate(id=>go(id),id);await expect(page.locator('#app')).toHaveAttribute('data-screen',id)};
  await navigate('F-03');
  await expect(page.getByLabel('On My Twin preview',{exact:true})).toBeVisible();
  await navigate('F-02');
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toBeVisible();
  await navigate('F-04');
  await page.getByLabel('Location',{exact:true}).fill('Alexandria');
  await page.getByLabel('Location',{exact:true}).press('Tab');
  await page.reload();
  await expect(page.getByLabel('Location',{exact:true})).toHaveValue('Alexandria');
  for(const [id,label] of [['F-05','Advanced Look layers'],['F-06','Add a layer'],['F-07','Choose a piece'],['F-08','Build with several pieces'],['F-09','Piece sources'],['F-10','Complete missing pieces'],['F-11','Saved draft']]){
    await navigate(id);
    await expect(page.getByLabel(label,{exact:true})).toBeVisible();
    await expect(page.locator('.mirror-studio-head h2')).toHaveText('Soft Tailoring');
  }
  await page.getByRole('button',{name:'New Look',exact:true}).click();
  await expect(page.locator('.mirror-studio-head h2')).toHaveText('Untitled Look');
  await expect(page.locator('.tryon-studio-formula')).toHaveCount(0);
});

test('view toggles and layer edits update the canvas instead of a fixed source Look',async({page})=>{
  await page.goto('/1.html#D-02');
  await page.locator('.today-actions').getByRole('button',{name:'Make it mine'}).click();
  await page.getByRole('button',{name:'Swap top',exact:true}).click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toContainText('Rust square-neck knit');
  await page.getByRole('button',{name:'On My Twin',exact:true}).click();
  await expect(page.getByLabel('On My Twin preview',{exact:true})).toContainText('A new try-on render is needed');
  await page.getByRole('button',{name:'Flat Lay',exact:true}).click();
  await page.getByRole('button',{name:'Create Advanced control'}).click();
  await page.getByRole('button',{name:'Hide Top',exact:true}).click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).not.toContainText('Rust square-neck knit');
});
