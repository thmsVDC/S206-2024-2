import { test } from "../fixtures/fixtures"

test.beforeEach(async ({ loginPage, productsPage }) => {
    await loginPage.visit();
    await loginPage.fillLoginInfos("standard_user", "secret_sauce");
    await loginPage.submitLogin();

    await productsPage.addToCart();
    await productsPage.gotoCartPage();
});

test.describe("Checkout operations", () => {

    test("Should Checkout", async ({ cartPage }) => {
        await cartPage.gotoCheckoutPage();
        await cartPage.fillInformation("Thomas", "Carvalho", "12345678");
        await cartPage.continueToOverviewPage();
        await cartPage.finishPurchase();
        await cartPage.expectSuccess();
    });
});