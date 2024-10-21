import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly btnLogin: Locator;
    
    private readonly warning: Locator;

    private readonly btnSideBar: Locator;
    private readonly btnLogout: Locator;


  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');

    this.warning = page.locator('[data-test="error"]');

    this.btnSideBar = page.getByRole('button', { name: 'Open Menu' });
    this.btnLogout = page.locator('[data-test="logout-sidebar-link"]');
  }

  async visit() {
    await this.page.goto("https://www.saucedemo.com");
  }


  async fillLoginInfos(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }


  async submitLogin() {
    await this.btnLogin.click();
  }


  async openSideBar() {
    await this.btnSideBar.click();
  }


  async logout() {
    await this.btnLogout.click();
  }


  async expectUrlSuccess(suffix: string) {
    const expectedUrl = `https://www.saucedemo.com/${suffix}`;
    await expect(this.page).toHaveURL(expectedUrl);
}


  async expectLoginError() {
    await expect(this.warning).toContainText('Epic sadface: Username and password do not match any user in this service');
  }
}