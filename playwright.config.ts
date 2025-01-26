import { defineConfig } from '@playwright/test'

export default defineConfig({
  testMatch: '**/e2e-tests/**/*.spec.ts',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080', // Varmista, että tämä on oikea portti
    timeout: 180 * 1000, // Nostetaan aikarajaa 3 minuuttiin
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080', // Varmista, että tämä on sama portti
  },
})
