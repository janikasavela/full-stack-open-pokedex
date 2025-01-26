import { defineConfig } from '@playwright/test'

export default defineConfig({
  testMatch: '**/e2e-tests/**/*.spec.ts',
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:8081',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8081/',
  },
})
