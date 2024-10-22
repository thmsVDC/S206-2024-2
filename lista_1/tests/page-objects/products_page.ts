import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  private readonly btnBackPack: Locator;
  private readonly btnBikeLight: Locator;

  private readonly cartIcon: Locator;
  private readonly productList: Locator;


  constructor(page: Page) {
    this.page = page;
    this.btnBackPack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.btnBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.productList = page.locator('.inventory_list');
  }


  async addToCart() {
    await this.btnBackPack.click();
    await this.btnBikeLight.click();
  }


  async gotoCartPage() {
    await this.cartIcon.click();
  }


  async expectItemsAdded() {
    await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  }


  async setViewPortSize(viewport) {
    await this.page.setViewportSize({ width: viewport.width, height: viewport.height });
  }


  async expectContentsVisible() {
    await expect(this.productList).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
  }

}
