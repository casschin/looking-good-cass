import { test, expect } from '@playwright/test';

// Basic test to check homepage loads and contains expected text

test('homepage loads and shows title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Looking good, Cass!/i);
  await expect(page.locator('body')).toContainText('Looking good, Cass!');
});
