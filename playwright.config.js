const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  outputDir: './_archive_not_used_by_zero_html/runtime-test-results',
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4174',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'python3 -m http.server 4174 --bind 127.0.0.1',
    url: 'http://127.0.0.1:4174/0.html',
    reuseExistingServer: true
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'], browserName: 'chromium', viewport: { width: 375, height: 812 } } }
  ]
});
