import { test as base } from "@playwright/test"
import { GeneralTests } from "../page-objects/general_tests";



type MyFixtures = {
    generalTests: GeneralTests
}

export const test = base.extend<MyFixtures> ({
    generalTests: async ({ page }, use) => {
        const generalTests = new GeneralTests(page)
        await use(generalTests)
    }
});
