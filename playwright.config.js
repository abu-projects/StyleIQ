const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testIgnore: '**/zero-html-baseline.spec.js', // Historical old/0.html, outside the active prototype.
  outputDir: './test-results',
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4188',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'python3 -m http.server 4188 --bind 127.0.0.1',
    url: 'http://127.0.0.1:4188/index.html',
    reuseExistingServer: true
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'], browserName: 'chromium', viewport: { width: 375, height: 812 } } }
  ]
});
