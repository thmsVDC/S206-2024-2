import { test } from "../fixtures/fixtures.ts"


test.beforeEach(async ({ generalTests }) => {
    await generalTests.visit();
});

test.describe("Import Scenarios", () => {
    test("Should Import Succesfully", async ({ generalTests }) => {
        await generalTests.gotoUploadFilePage();
        await generalTests.uploadDocument("file_to_upload.txt")
        await generalTests.expectUploadSuccess();
    });
});

test.describe("Authentication Scenarios", () => {
    test("Should Authenticate Succesfully", async ({ generalTests }) => {
        await generalTests.gotoAuthenticationPage();
        await generalTests.fillAuthenticationFields("tomsmith", "SuperSecretPassword!")
        await generalTests.expectLoginSuccessfull();
    });

    test("Should Not Authenticate With Incorrect Passwords", async ({ generalTests }) => {
        await generalTests.gotoAuthenticationPage();
        await generalTests.fillAuthenticationFields("tomsmith", "Error")
        await generalTests.expectWrongPassword();
    });

    test("Should Not Authenticate With Incorrect Username", async ({ generalTests }) => {
        await generalTests.gotoAuthenticationPage();
        await generalTests.fillAuthenticationFields("Error", "SuperSecretPassword!")
        await generalTests.expectWrongUsername();
    });
});

