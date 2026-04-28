const locators = require('../locators/LogoutPageLocators');
const BasePage = require('./BasePage'); 
class LogoutPage extends BasePage {

    constructor(page) {
        super(page);
        //this.locators = new LogoutPageLocators();
    }   
    async logout() {
        await this.click(locators.myAccountMenu);
        await this.click(locators.logoutLink);
        console.log('Logout link clicked');
        await this.waitForTimeout(2000);
    }   

    async verifyLogoutMsg() {
            await this.click(locators.logOutMsg);
            console.log('Logout message verified');
            await this.waitForTimeout(2000);
        } 
        
    async clickContinue() {
        await this.click(locators.continueButton);
        console.log('Continue button clicked');
    }

}

module.exports= LogoutPage;
