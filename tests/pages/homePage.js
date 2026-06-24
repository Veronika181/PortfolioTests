import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /veronika/i });
  }

  async open() {
    await this.page.goto('https://veronika181.github.io/Veronika_portfolio_website.github.io/');
  }

  async verifyLoaded() {
    await expect(this.page).toHaveTitle(/Veronika/i);
    await expect(this.heading).toBeVisible();
  }
}
