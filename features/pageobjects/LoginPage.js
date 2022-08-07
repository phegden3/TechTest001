import page from "./Page";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputCreatAnAccountEmailAddress() { return $('#email_create'); }
    get btnCreateAnAccount() { return $('#SubmitCreate'); }
    get inputAlreadyRegisteredEmailAddress() { return $('#email'); }
    get inputAlreadyRegisteredPassword() { return $('#passwd'); }
    get linkForgetYourPassword() { return $('[title="Recover your forgotten password"]'); }
    get btnAlreadyRegisteredSignIn() { return $('#SubmitLogin'); }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputAlreadyRegisteredEmailAddress.setValue(email);
        await this.inputAlreadyRegisteredPassword.setValue(password);
        await page.clickButton(this.btnAlreadyRegisteredSignIn);
    }

    async enterCreatAnAccountEmailAddress (email) {
        await this.inputCreatAnAccountEmailAddress.waitForDisplayed();
        await this.inputCreatAnAccountEmailAddress.setValue(email);
    }
    
}

export default new LoginPage();
