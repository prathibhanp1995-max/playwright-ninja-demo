const locators = require('../locators/LoginPageLocators');
const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        //this.locators = new LoginPageLocators();
    }       

    async openLogin() {
        await this.page.goto('https://tutorialsninja.com/demo/');
        await this.waitForTimeout(3000);
        await this.click(locators.myAccountMenu);
        await this.click(locators.loginLink);
        await this.waitForTimeout(2000);
    }   

    async login(email, password) {
        await this.fill(locators.emailInput, email);
        await this.fill(locators.passwordInput, password);
        await this.click(locators.loginButton);
        console.log('Login successful');
    }

   
}

module.exports= LoginPage;