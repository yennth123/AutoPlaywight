import { test, expect, Locator } from '@playwright/test';
  test('DDK_271 - Kiểm tra đăng ký đơn khi ấn hủy bỏ', async ({ page }) => {
    await page.goto('https://dormitory-staging.phx-smartuni.com/login');
    const locator = page.locator('//input[@placeholder="Nhập tên đăng nhập"]');
    await locator.fill('21011228@st.phenikaa-uni.edu.vn');
    const locator1 = page.locator('//input[@placeholder="Nhập mật khẩu"]');
    await locator1.fill('123456');
    await page.click('//button[normalize-space(text())="Đăng nhập"]');
    await page.click('//span[normalize-space(text())="Đơn đăng ký"]');
    await page.click('//button[normalize-space(.)="Xem chi tiết"]');
    await page.click('//button[normalize-space(.)="Tạo đơn"]');
    await page.getByRole('button', { name: 'Huỷ bỏ' }).click();
    await expect(page.getByRole('button', { name: 'Tạo đơn' })).toBeVisible();
  });

  test('DDK_275 - Kiểm tra quá thời gian đăng ký - không cho tạo đơn', async ({ page }) => {
  await page.goto('https://dormitory-staging.phx-smartuni.com/login');

  // Đăng nhập
  await page.fill('input[placeholder="Nhập tên đăng nhập"]', '21011228@st.phenikaa-uni.edu.vn');
  await page.fill('input[placeholder="Nhập mật khẩu"]', '123456');
  await page.click('button:has-text("Đăng nhập")');

  // Vào menu "Đơn đăng ký"
  await page.click('//span[normalize-space(text())="Đơn đăng ký"]');

  const today = new Date();

  const cards = await page.locator('div:has-text("Thời gian đăng ký")').elementHandles();

  for (const card of cards) {
    const parent = await card.evaluateHandle(el => el.closest('div'));

    const timeText = await parent.evaluate(el => {
      const timeLabel = Array.from(el.querySelectorAll('*'))
        .find(e => e.textContent?.includes('Thời gian đăng ký'));
      return timeLabel?.nextSibling?.textContent?.trim() || '';
    });

    if (!timeText) continue;

    const [fromStr, toStr] = timeText.split('-').map(s => s.trim());
    const from = parseDate(fromStr);
    const to = parseDate(toStr);

    if (today < from || today > to) {
      // Đợt này không nằm trong thời gian đăng ký → click "Xem chi tiết"
      const xemBtn = await parent.$('//button[normalize-space(.)="Xem chi tiết"]');
      if (xemBtn) {
        await xemBtn.click();

        // ❌ Kiểm tra KHÔNG có nút "Tạo đơn"
        const taoDonBtn = page.locator('//button[normalize-space(.)="Tạo đơn"]');
        await expect(taoDonBtn).toBeHidden();

        // Quay lại trang danh sách
        await page.goBack();
      }
    }
  }

  function parseDate(str: string): Date {
    const [d, m, y] = str.split('/').map(Number);
    return new Date(y, m - 1, d);
  }
});

function locator5(taoDonBtn: Locator) {
  throw new Error('Function not implemented.');
}


test('DDK_276 - Kiểm tra trong thời gian đăng ký - cho phép tạo đơn', async ({ page }) => {
  await page.goto('https://dormitory-staging.phx-smartuni.com/login');

  // Đăng nhập
  await page.fill('input[placeholder="Nhập tên đăng nhập"]', '21011228@st.phenikaa-uni.edu.vn');
  await page.fill('input[placeholder="Nhập mật khẩu"]', '123456');
  await page.click('button:has-text("Đăng nhập")');

  // Vào menu "Đơn đăng ký"
  await page.click('//span[normalize-space(text())="Đơn đăng ký"]');

  const today = new Date();

  const cards = await page.locator('div:has-text("Thời gian đăng ký")').elementHandles();

  for (const card of cards) {
    const timeText = await card.evaluate(el => {
      const container = el.closest('div');
      const timeLabel = Array.from(container?.querySelectorAll('*') || [])
        .find(e => e.textContent?.includes('Thời gian đăng ký'));
      const timeValue = timeLabel?.nextElementSibling?.textContent?.trim() || '';
      return timeValue;
    });

    if (!timeText) continue;

    const [fromStr, toStr] = timeText.split('-').map(s => s.trim());
    const from = parseDate(fromStr);
    const to = parseDate(toStr);

    if (today >= from && today <= to) {
      // Trong thời gian đăng ký → click "Xem chi tiết"
      const xemChiTietBtn = await card.$('xpath=.//button[normalize-space(.)="Xem chi tiết"]');
      if (xemChiTietBtn) {
        await xemChiTietBtn.click();

        // ✅ Kiểm tra CÓ nút "Tạo đơn"
        const taoDonBtn = page.locator('//button[normalize-space(.)="Tạo đơn"]');
        await expect(taoDonBtn).toBeVisible();

        // (Tuỳ chọn) Click thử để đảm bảo mở form thành công
        await taoDonBtn.click();
        await expect(page.locator('text=Loại đơn')).toBeVisible();

        break; // Thoát vòng lặp nếu đã tìm được đợt hợp lệ
      }
    }
  }

  function parseDate(str: string): Date {
    const [d, m, y] = str.split('/').map(Number);
    return new Date(y, m - 1, d);
  }
});

