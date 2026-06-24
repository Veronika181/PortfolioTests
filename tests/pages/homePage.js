import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

    this.header = page.locator('header');
    this.mainHeading = page.locator('h1');
    this.projectsSection = page.locator('#projects');
    this.contactSection = page.locator('#contact');
  }

  async goto() {
    await this.page.goto('https://veronika181.github.io/Veronika_portfolio_website.github.io/');
  }

  async verifyLoaded() {
    await expect(this.header).toBeVisible();
    await expect(this.mainHeading).toBeVisible();
  }
}
