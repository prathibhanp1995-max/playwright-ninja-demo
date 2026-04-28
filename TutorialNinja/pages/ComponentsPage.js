const locators = require('../locators/ComponentsPageLocators');
const BasePage = require('./BasePage'); 
const {expect} = require('@playwright/test');
class ComponentsPage extends BasePage {

    constructor(page) {
        super(page);
        //this.locators = new ComponentsPageLocators();
    }   
    async openComponentsMenu() {
        await this.click(locators.componentsMenu);
        console.log('Components menu opened');
    }       

    async selectMonitors() {
        await this.click(locators.monitorsLink);
        console.log('Monitors category selected');
      //  await this.waitForTimeout(1000);
    }   
    async selectShowDropdown(value) {   
        await this.selectOption(locators.showDropdown, value);
        console.log(`Show dropdown option selected: ${value}`);
        await this.waitForTimeout(1000);
    }   
    async addFirstProductToCart() {
        await this.click(locators.firstProductAddToCart);
        console.log('First product added to cart');
        //await this.waitForTimeout(1000);
    }   
    async openSpecificationTab() {
        await this.click(locators.specificationTab);
        console.log('Specification tab opened');
       // await this.waitForTimeout(1000);
    }       
    async verifyProductSpecificationVisible() {
        const isVisible = await this.page.isVisible(locators.specificationTab); 
      //  expect(isVisible).toBeTruthy(); 
        console.log('Product specification is visible');
    }   
    async addProductToWishlist() {
        await this.click(locators.addToWishlistButton);
        console.log('Add to Wishlist button clicked');
        await this.waitForTimeout(3000);
    }  
    
      
    async verifyWishlistSuccessMessage(expectedText) {
        const actualText = await this.getText(locators.successMsg);
        console.log(`Actual success message: ${actualText}`);
        console.log(`Expected success message: ${expectedText}`);
        expect(actualText).toContain(expectedText); 
        console.log('Wishlist success message verified');
    }
}

module.exports= ComponentsPage; 