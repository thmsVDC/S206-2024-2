import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;


  constructor(page: Page) {

  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {

  }

  async pageObjectModel() {

  }
}