import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // Siirrytään sovelluksen etusivulle
    await page.goto('http://localhost:8081')

    // Varmistetaan, että sivu on ladattu ja elementit näkyvät
    await expect(page.locator('text=ivysaur')).toBeVisible()
    await expect(
      page.locator(
        'text=Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
})
