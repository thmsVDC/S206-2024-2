import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    private readonly page: Page;
    private readonly btnCheckout: Locator;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly postalCodeField: Locator;
    private readonly btnContinue: Locator;
    private readonly btnFinish: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnCheckout = page.locator('[data-test="checkout"]')
        this.firstNameField = page.locator('[data-test="firstName"]');
        this.lastNameField = page.locator('[data-test="lastName"]');
        this.postalCodeField = page.locator('[data-test="postalCode"]');
        this.btnContinue = page.locator('[data-test="continue"]')
        this.btnFinish = page.locator('[data-test="finish"]');
    }


    async gotoCheckoutPage() {
        await this.btnCheckout.click();
    }


    async fillInformation (firstName: string, lastName: string, postalCode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode);
    }


    async continueToOverviewPage() {
        await this.btnContinue.click();
    }


    async finishPurchase() {
        await this.btnFinish.click();
    }


    async expectSuccess() {
        await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    }
}