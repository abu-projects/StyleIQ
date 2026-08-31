import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = '/Users/aboelkheirmohamed/code/StyleIQ';
const input = path.join(root, 'al.html');
const outputDir = path.join(root, 'tmp/pdfs/screens');
fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 980 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
});
const page = await context.newPage();

const pageErrors = [];
page.on('pageerror', error => pageErrors.push(String(error)));

await page.goto(pathToFileURL(input).href, { waitUntil: 'networkidle', timeout: 120000 });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});

const inventory = await page.evaluate(() => screens.map(({ id, section, title }) => ({ id, section, title })));
const manifest = [];

for (let index = 0; index < inventory.length; index += 1) {
  const screen = inventory[index];
  await page.evaluate(id => {
    if (typeof go === 'function') go(id, { record: false });
  }, screen.id);
  await page.waitForTimeout(80);
  await page.evaluate(async () => {
    const images = [...document.images];
    await Promise.all(images.map(img => img.complete ? null : new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    })));
  });
  const filename = `${String(index + 1).padStart(3, '0')}_${screen.id}.png`;
  const output = path.join(outputDir, filename);
  await page.locator('.phone').screenshot({ path: output, animations: 'disabled' });
  manifest.push({ ...screen, index: index + 1, filename });
  if ((index + 1) % 12 === 0 || index + 1 === inventory.length) {
    process.stdout.write(`Rendered ${index + 1}/${inventory.length}\n`);
  }
}

fs.writeFileSync(path.join(root, 'tmp/pdfs/screen_manifest.json'), JSON.stringify({
  source: 'al.html',
  count: manifest.length,
  generatedAt: new Date().toISOString(),
  pageErrors: [...new Set(pageErrors)],
  screens: manifest,
}, null, 2));

await browser.close();
