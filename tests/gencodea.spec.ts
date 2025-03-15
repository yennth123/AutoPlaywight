import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywirght%26oq%3Dplaywirght%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTE1MzM3ajBqMqgCALACAQ%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DkwPVZ6SdC7ul2roPtozCqAs&q=EgQqc43gGJOH1L4GIjAklokPXW3O6heF7PYk5oUcxJZFjOXfhfHS55ROz-YUoHmlEz9xDXUAgBNRQS3-LpcyAXJaAUM');
  await page.locator('body').click();
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
});