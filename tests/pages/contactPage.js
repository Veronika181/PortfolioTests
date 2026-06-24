import { expect } from '@playwright/test';

export class ContactPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.messageInput = page.locator('#message');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async fillForm(name, email, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }

  async submit() {
    await this.submitButton.click();
  }
}
