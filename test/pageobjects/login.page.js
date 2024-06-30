import Page from "./page.js";
import { $ } from "@wdio/globals"

class LoginPage extends Page {
    open(path) {
        return super.open("")
    }

    get textBoxUsername() {
        return $('#user-name')
    }

    get textBoxPassword() {
        return $("#password")
    }

    get buttonLogin() {
        return $("#login-button")
    }

    get errorMessage() { 
        return $('.error-message-container'); 
    }

    async expectErrorMessage(errorMessageText) {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        const actualErrorMessage = await this.errorMessage.getText();
        expect(actualErrorMessage).toContain(errorMessageText);
    }
    
    async login(username, password) {
        await this.textBoxUsername.setValue(username);
        await this.textBoxPassword.setValue(password);
        await this.buttonLogin.click()
    }
}

export default new LoginPage();