import { test } from "../fixtures/fixtures"
const users = ["standard_user", "", "problem_user", "performance_glitch_user", "error_user", "visual_user"];

test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
});

test.describe("Login and Logout", () => {

    test("Should login successfully", async ({ loginPage }) => {
        await loginPage.fillLoginInfos("standard_user", "secret_sauce");
        await loginPage.submitLogin();
        await loginPage.expectUrlSuccess("inventory.html");
    });
    

    test("Should not login with incorrect password", async ({ loginPage }) => {
        await loginPage.fillLoginInfos("standard_user", "error");
        await loginPage.submitLogin();
        await loginPage.expectLoginError();

    });

    test("Should logout successfully", async ({ loginPage }) => {
        await loginPage.fillLoginInfos("standard_user", "secret_sauce");
        await loginPage.submitLogin();

        await loginPage.openSideBar();
        await loginPage.logout();
        await loginPage.expectUrlSuccess("")
    });
});