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
    await expect(page.getByLabel(label,{exact:true}).getByRole('heading').first()).toBeInViewport();
    if(['F-06','F-07','F-08','F-09','F-10'].includes(id))await expect(page.getByRole('group',{name:'Piece source',exact:true})).toBeInViewport();
    await expect(page.locator('.mirror-studio-head h2')).toHaveText('Soft Tailoring');
  }
  await page.getByRole('button',{name:'New Look',exact:true}).click();
  await expect(page.locator('.mirror-studio-head h2')).toHaveText('Untitled Look');
  await expect(page.locator('.tryon-studio-formula')).toHaveCount(0);
});


async function studioWithTwin(page){
  await page.goto('/1.html#D-02');
  await page.evaluate(()=>localStorage.setItem('styleiqTwinSetupV2',JSON.stringify({id:'studio-test-twin',complete:true,step:4,method:'photo'})));
  await page.reload();
  await page.locator('.today-actions').getByRole('button',{name:'Make it mine'}).click();
  await page.getByRole('button',{name:'Create Advanced control'}).click();
}
const category=(page,name)=>page.getByRole('group',{name:'Active layer',exact:true}).getByRole('button',{name,exact:true});
const choose=(page,name)=>page.locator('.studio-picker').getByRole('button',{name:`Choose ${name}`,exact:true});

test('one Look synchronizes visual edits, sources, view modes, layers and Save',async({page})=>{
  await studioWithTwin(page);
  await page.getByRole('button',{name:'On My Twin',exact:true}).click();
  await category(page,'Shoes').click();
  await choose(page,'Minimal sneaker').click();
  await expect(choose(page,'Minimal sneaker')).toHaveAttribute('aria-pressed','true');
  await expect(page.getByText('Preview needs refresh',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Update Try-On',exact:true}).click();
  await expect(page.locator('.studio-render-notice')).toContainText('generation is not connected');
  await page.getByRole('button',{name:'Flat Lay',exact:true}).click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true}).getByRole('button',{name:'Edit Shoes: Minimal sneaker',exact:true})).toBeVisible();
  await page.getByLabel('Flat Lay preview',{exact:true}).getByRole('button',{name:/Edit Top:/}).click();
  await choose(page,'Rust square-neck knit').click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toContainText('Rust square-neck knit');
  await page.getByRole('button',{name:'On My Twin',exact:true}).click();
  await expect(choose(page,'Rust square-neck knit')).toHaveAttribute('aria-pressed','true');
  await page.locator('.studio-picker-heading').getByRole('button',{name:'Add piece'}).click();
  await category(page,'Accessory').click();
  await page.getByRole('group',{name:'Piece source',exact:true}).getByRole('button',{name:'My Closet',exact:true}).click();
  await choose(page,'Gold everyday hoops').click();
  await page.getByRole('button',{name:'Flat Lay',exact:true}).click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toContainText('Gold everyday hoops');
  // Mode toggles do not alter selected pieces or active layer.
  const before=await page.evaluate(()=>localStorage.getItem('styleiqAltaCanvasV2'));
  await page.getByRole('button',{name:'Simple Everyday changes'}).click();
  await expect(page.getByLabel('Advanced Look layers',{exact:true})).toHaveCount(0);
  await page.getByRole('button',{name:'Create Advanced control'}).click();
  expect(await page.evaluate(()=>localStorage.getItem('styleiqAltaCanvasV2'))).toBe(before);
  await page.reload();
  await expect(category(page,'Accessory')).toHaveAttribute('aria-pressed','true');
  await page.getByRole('button',{name:'Save',exact:true}).click();
  await expect(page.locator('#app')).toHaveAttribute('data-screen','G-02');
  const saved=await page.evaluate(()=>({look:JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')),twin:JSON.parse(localStorage.getItem('styleiqTwinSetupV2'))}));
  expect(saved.look.title).toBe('Coffee Meeting');
  expect(saved.look.items.map(x=>x.name)).toEqual(['Black tailored blazer','Rust square-neck knit','Black straight trousers','Minimal sneaker','Gold everyday hoops']);
  expect(saved.twin.id).toBe('studio-test-twin');
});

test('new Look starts visually and Lens returns a chosen Closet match to the same draft',async({page})=>{
  await page.goto('/1.html#F-01');
  await page.getByRole('button',{name:'New Look',exact:true}).click();
  await expect(page.getByLabel('Start your Look',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Use Lens',exact:true}).click();
  await page.getByRole('dialog',{name:'StyleIQ Lens',exact:true}).getByRole('button',{name:'Photo library',exact:true}).click();
  await page.getByRole('button',{name:/Find owned alternatives/}).click();
  await page.locator('.studio-lens-return').getByRole('button',{name:'Choose Ivory silk shell',exact:true}).click();
  await expect(page.getByRole('dialog',{name:'StyleIQ Lens',exact:true})).toHaveCount(0);
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toContainText('Ivory silk shell');
  await expect(page.locator('.mirror-studio-head h2')).toHaveText('Untitled Look');
  await page.getByRole('group',{name:'Piece source',exact:true}).getByRole('button',{name:'Search',exact:true}).click();
  await page.getByLabel('Search pieces',{exact:true}).fill('rust');
  await expect(page.locator('.studio-piece-option')).toHaveCount(1);
  await choose(page,'Rust square-neck knit').click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true})).toContainText('Rust square-neck knit');
});

test('advanced hide, reorder and remove retain the remaining canonical layers',async({page})=>{
  await studioWithTwin(page);
  const top=page.locator('.studio-layer-row').filter({has:page.locator('summary b').filter({hasText:'Top'})});
  await top.locator('summary').click();
  await page.getByRole('button',{name:'Hide Top',exact:true}).click();
  await expect(page.getByLabel('Flat Lay preview',{exact:true}).getByRole('button',{name:/Edit Top:/})).toHaveCount(0);
  await top.locator('summary').click();
  await page.getByRole('button',{name:'Show Top',exact:true}).click();
  await top.locator('summary').click();
  await page.getByRole('button',{name:'Move Top up',exact:true}).click();
  await expect(page.locator('.studio-layer-row').first().locator('summary b')).toHaveText('1. Top');
  await page.locator('.studio-layer-row').first().locator('summary').click();
  await page.getByRole('button',{name:'Remove Top',exact:true}).click();
  expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('styleiqAltaCanvasV2')).items.map(x=>x.role))).toEqual(['Outerwear','Bottom','Shoes']);
});

test('render completion never replaces edits made while the renderer was pending',async({page})=>{
  await studioWithTwin(page);
  await page.getByRole('button',{name:'On My Twin',exact:true}).click();
  await category(page,'Shoes').click();await choose(page,'Minimal sneaker').click();
  // Mock only the optional external image-generation boundary, not Studio state.
  await page.evaluate(()=>window.styleiqStudioRenderer=()=>new Promise(resolve=>window.finishStudioRender=resolve));
  await page.getByRole('button',{name:'Update Try-On',exact:true}).click();
  await expect(page.getByRole('button',{name:'Updating…',exact:true})).toBeDisabled();
  await category(page,'Top').click();await choose(page,'Rust square-neck knit').click();
  await page.evaluate(()=>window.finishStudioRender({image:'images/body_front.png'}));
  await expect(page.locator('.studio-render-notice')).toContainText('Look changed while rendering');
  await expect(page.getByText('Preview needs refresh',{exact:true})).toBeVisible();
  await expect(choose(page,'Rust square-neck knit')).toHaveAttribute('aria-pressed','true');
  await page.evaluate(()=>window.styleiqStudioRenderer=async()=>({image:'images/body_front.png'}));
  await page.getByRole('button',{name:'Update Try-On',exact:true}).click();
  await expect(page.getByLabel('On My Twin preview',{exact:true}).getByRole('img',{name:'Current Look on your Style Twin',exact:true})).toBeVisible();
  await page.reload();
  await expect(page.getByLabel('On My Twin preview',{exact:true}).getByRole('img',{name:'Current Look on your Style Twin',exact:true})).toBeVisible();
});
