import { expect, Locator, Page } from "@playwright/test";
import path from "path";

export class GeneralTests {
    private readonly page: Page;
    private readonly btn_file_upload_page: Locator;
    private readonly btn_file_download_page: Locator;
    private readonly username_field: Locator;
    private readonly password_field: Locator;
    private readonly btn_login: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btn_file_upload_page = page.getByRole('link', { name: 'File Upload' });
        this.btn_file_download_page = page.getByRole('link', { name: 'File Download', exact: true });

        this.username_field = page.getByLabel('Username');
        this.password_field = page.getByLabel('Password');
        this.btn_login = page.getByRole('button', { name: ' Login' });
    }


    async visit() {
        await this.page.goto("https://the-internet.herokuapp.com");
    }

    async gotoUploadFilePage() {
        await this.btn_file_upload_page.click();
    }

    async gotoAuthenticationPage() {
        await this.page.getByRole('link', { name: 'Form Authentication' }).click();
    }

    async uploadDocument(file_name: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator('#file-upload').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(__dirname, '../../upload/', file_name));
        await this.page.getByRole('button', { name: 'Upload' }).click();
    }



    async fillAuthenticationFields(username: string, password: string) {
        await this.username_field.click();
        await this.username_field.fill(username);
        await this.password_field.click();
        await this.password_field.fill(password);
        await this.btn_login.click();
    }

    async expectUploadSuccess() {
        await expect(this.page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
    }

    async expectLoginSuccessfull() {
        await expect(this.page.getByText('You logged into a secure area')).toBeVisible();
    }

    async expectWrongPassword() {
        await expect(this.page.getByText('Your password is invalid! ×')).toBeVisible();
    }

    async expectWrongUsername() {
        await expect(this.page.getByText('Your username is invalid! ×')).toBeVisible();
    }

    
}