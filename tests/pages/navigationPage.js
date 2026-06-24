import { expect } from '@playwright/test';

export class NavigationPage {
  constructor(page) {
    this.page = page;

    this.aboutLink = page.getByRole('link', { name: /about/i });
    this.projectsLink = page.getByRole('link', { name: /projects/i });
    this.contactLink = page.getByRole('link', { name: /contact/i });

    this.aboutSection = page.locator('#about');
    this.projectsSection = page.locator('#projects');
    this.contactSection = page.locator('#contact');
  }

  async goToProjects() {
    await this.projectsLink.click();
    await expect(this.projectsSection).toBeInViewport();
  }

  async goToContact() {
    await this.contactLink.click();
    await expect(this.contactSection).toBeInViewport();
  }
}
