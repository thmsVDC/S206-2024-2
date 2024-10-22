import { test } from "../fixtures/fixtures"

const viewports = [
    { device: 'Desktop', width: 1920, height: 1080 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 }
  ];

test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
    await loginPage.fillLoginInfos("standard_user", "secret_sauce");
    await loginPage.submitLogin();
});

test.describe("Products Page Tests", () => {

    test("Should add products to cart", async ({ productsPage }) => {
        await productsPage.addToCart();
        await productsPage.gotoCartPage();
        await productsPage.expectItemsAdded();
    });


    viewports.forEach(viewport => {

        test(`Should be able to be used on ${viewport.device}`, async ({ productsPage }) => {
            await productsPage.setViewPortSize(viewport);
            await productsPage.expectContentsVisible();
        });

      });
      
});