import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // Siirrytään sovelluksen etusivulle
    await page.goto('http://localhost:8080')

    // Varmistetaan, että sivu on ladattu ja elementit näkyvät
    await expect(page.locator('text=ivysaur')).toBeVisible()
    await expect(
      page.locator(
        'text=Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
})

test.describe('Pokedex Navigation', () => {
  test('can navigate to Ivysaur page', async ({ page }) => {
    await page.goto('http://localhost:8081')

    await page.locator('text=ivysaur').click()

    await expect(page.locator('text=chlorophyll')).toBeVisible()
  })
})
