import { expect } from '@playwright/test';

export class NavigationPage {
  constructor(page) {
    this.page = page;
    this.aboutLink = page.getByRole('link', { name: /about/i });
    this.projectsLink = page.getByRole('link', { name: /projects/i });
    this.contactLink = page.getByRole('link', { name: /contact/i });
  }

  async goToAbout() {
    await this.aboutLink.click();
    await expect(this.page.locator('#about')).toBeVisible();
  }

  async goToProjects() {
    await this.projectsLink.click();
    await expect(this.page.locator('#projects')).toBeVisible();
  }

  async goToContact() {
    await this.contactLink.click();
    await expect(this.page.locator('#contact')).toBeVisible();
  }
}
