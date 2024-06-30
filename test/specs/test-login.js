import catalogPage from "../pageobjects/catalog.page.js";
import loginPage from "../pageobjects/login.page.js";

describe('Login', () => {

    beforeEach(async () => {
        await loginPage.open();
    });

    afterEach(async () => {
        await browser.pause(5000);
    });

    it('login with valid credentials', async () => {
        await loginPage.login(process.env.sd_username, process.env.sd_password)
        await catalogPage.validateOnPage()
    });

    it('login with invalid credentials', async () => {
        await loginPage.login(process.env.sd_invusername, process.env.sd_invpassword)
        await loginPage.expectErrorMessage(process.env.errInvUser);
    });

    it('login with locked account', async () => {
        await loginPage.login(process.env.sd_lockusername, process.env.sd_lockpassword)
        await loginPage.expectErrorMessage(process.env.errLockedUser);
    });

    it('login with empty username', async () => {
        await loginPage.login('', process.env.sd_password)
        await loginPage.expectErrorMessage(process.env.errUsernameRequired);
    });

    it('login with empty password', async () => {
        await loginPage.login(process.env.sd_username, '')
        await loginPage.expectErrorMessage(process.env.errPasswordRequired);
    });
});
