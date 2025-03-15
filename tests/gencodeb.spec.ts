import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.w3schools.com/');
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).fill('html');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('heading', { name: 'HTML Forms' }).click();
  await page.getByRole('link', { name: 'HTML Forms' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('yeens');
  await page.getByRole('textbox', { name: 'Last name:' }).dblclick();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('nguyen');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#main div').filter({ hasText: 'Example First name: Last name' }).getByRole('button').click();
  const page1 = await page1Promise;
});