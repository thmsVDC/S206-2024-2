import { test as base } from "@playwright/test"

import { LoginPage } from "../page-objects/login_page"
import { ProductsPage } from "../page-objects/products_page"

type MyFixtures = {
    loginPage: LoginPage,
    productsPage: ProductsPage
}

export const test = base.extend<MyFixtures> ({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page)
        await use(productsPage)
    }
});