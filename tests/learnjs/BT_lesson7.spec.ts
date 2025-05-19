import { test, expect } from '@playwright/test';

  test('ĐN_30 - Chỉ nhập mật khẩu', async ({ page }) => {
    await page.goto('https://dormitory-staging.phx-smartuni.com/login');
    await page.getByRole('textbox', { name: 'Nhập mật khẩu' }).click();
    await page.getByRole('textbox', { name: 'Nhập mật khẩu' }).fill('admin');
    await page.getByRole('textbox', { name: 'Nhập tên đăng nhập' }).click();
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    const errorMessage = page.locator('p.MuiFormHelperText-root.Mui-error');
    await expect(errorMessage).toHaveText('Vui lòng nhập tên đăng nhập');
  });
  test('ĐN_31 - KT Chỉ nhập tên đăng nhập', async ({ page }) => {
    await page.goto('https://dormitory-staging.phx-smartuni.com/login');
    await page.getByRole('textbox', { name: 'Nhập mật khẩu' }).click();
    await page.getByRole('textbox', { name: 'Nhập tên đăng nhập' }).click();
    await page.getByRole('textbox', { name: 'Nhập tên đăng nhập' }).fill('admin');  
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    const errorMessage = page.locator('p.MuiFormHelperText-root.Mui-error');
    await expect(errorMessage).toHaveText('Vui lòng nhập mật khẩu');
  });


  test('ĐN_31C2 - Chỉ nhập tên đăng nhập', async ({ page }) => {
    await page.goto('https://dormitory-staging.phx-smartuni.com/login');
    const locator = page.locator('//input[@placeholder="Nhập tên đăng nhập"]');
    await locator.fill('admin');
    await page.click('//button[normalize-space(text())="Đăng nhập"]');
    const errorMessage = page.locator('//p[contains(text(), "Vui lòng nhập mật khẩu")]');
    await expect(errorMessage).toHaveText('Vui lòng nhập mật khẩu');
  });

   test('ĐN_30C2 - Chỉ nhập mật khẩu', async ({ page }) => {
    await page.goto('https://dormitory-staging.phx-smartuni.com/login');
    const locator = page.locator('//input[@placeholder="Nhập mật khẩu"]');
    await locator.fill('admin');
    await page.click('//button[normalize-space(text())="Đăng nhập"]');
    const errorMessage = page.locator('//p[contains(text(), "Vui lòng nhập tên đăng nhập")]');
    await expect(errorMessage).toHaveText('Vui lòng nhập tên đăng nhập');
  });



  