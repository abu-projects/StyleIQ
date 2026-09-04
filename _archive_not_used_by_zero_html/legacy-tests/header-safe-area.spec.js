const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
  await page.waitForFunction(() => window.StyleIQWp20Audit?.screenCount === 101);
});

// Regression: the 9 in "9:41" was clipped by the 48px phone-frame corner on
// X-2, C-7, C-13–C-20, and related raw-header screens.
test('all phone status headers clear the rounded frame corners', async ({ page }) => {
  const audit = await page.evaluate(() => [...document.querySelectorAll('[id^="screen-"] .status')].map(status => {
    let frame = status.parentElement;
    while (frame && frame !== document.body && getComputedStyle(frame).borderRadius !== '48px') {
      frame = frame.parentElement;
    }

    const screen = status.closest('[id^="screen-"]');
    const frameRect = frame?.getBoundingClientRect();
    const timeRect = status.firstElementChild?.getBoundingClientRect();

    return {
      id: screen?.id,
      display: getComputedStyle(status).display,
      timeTop: frameRect && timeRect ? timeRect.top - frameRect.top : 0,
      timeLeft: frameRect && timeRect ? timeRect.left - frameRect.left : 0
    };
  }));

  expect(audit.length).toBeGreaterThan(0);
  expect(audit.filter(item => item.display !== 'flex')).toEqual([]);
  expect(audit.filter(item => item.timeTop < 27 || item.timeLeft < 28)).toEqual([]);
});
