import { defineConfig } from '@playwright/test'

export default defineConfig({
  testMatch: '**/e2e-tests/**/*.spec.ts',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 180 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
})
