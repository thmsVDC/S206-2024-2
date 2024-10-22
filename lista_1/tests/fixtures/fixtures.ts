import { test as base } from "@playwright/test"

import { LoginPage } from "../page-objects/login_page"
import { ProductsPage } from "../page-objects/products_page"
import { CartPage } from "../page-objects/cart_page"

type MyFixtures = {
    loginPage: LoginPage,
    productsPage: ProductsPage
    cartPage: CartPage
}

export const test = base.extend<MyFixtures> ({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page)
        await use(productsPage)
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    }
});