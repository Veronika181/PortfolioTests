import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { NavigationPage } from './pages/navigationPage';
import { ContactPage } from './pages/contactPage';

const URL = 'https://veronika181.github.io/Veronika_portfolio_website.github.io/';

test.describe('Portfolio Website Test Suite', () => {

  test('Homepage loads correctly', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.verifyLoaded();
  });

  test('Navigation works (Projects, Contact)', async ({ page }) => {
    const home = new HomePage(page);
    const nav = new NavigationPage(page);

    await home.goto();
    await nav.goToProjects();
    await nav.goToContact();
  });

  test('All images load', async ({ page }) => {
    await page.goto(URL);

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  });

  test('External links exist (GitHub, LinkedIn)', async ({ page }) => {
  await page.goto(URL);

  const github = page.locator('a[href*="github.com/Veronika181"]');
  const linkedin = page.locator('a[href*="linkedin.com/in/veronika"]');

  await expect(github.first()).toHaveAttribute('href', /github\.com/);
  await expect(linkedin.first()).toHaveAttribute('href', /linkedin\.com/);
});


  });

  test('Scrolling works', async ({ page }) => {
    await page.goto(URL);

    await page.mouse.wheel(0, 2000);
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Mobile layout works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    await page.goto(URL);
    await expect(page.locator('nav')).toBeVisible();
  });
