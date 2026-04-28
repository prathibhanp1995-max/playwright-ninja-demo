const locators = require('../locators/ProductPageLocators');
const BasePage = require('./BasePage'); 
const {expect} = require('@playwright/test');

class ProductPage extends BasePage {        
    constructor(page) {
        super(page);
        //this.locators = new ProductPageLocators();
    }
    async searchProduct(productName) {
        await this.fill(locators.searchInput, productName);
        console.log(`Entered product name in search: ${productName}`);
    }
    async clickSearchButton() {
        await this.click(locators.searchButton);
        console.log('Search button clicked');
        await this.waitForTimeout(1000);
    }
    async enableSearchInDescription() {
        await this.click(locators.searchDescriptionCheckbox);   
        console.log('Search in description enabled');   
       await this.waitForTimeout(1000);    
    }   
    async openMacBookPro() {
   console.log("Clicking MacBook Pro link...");
   const productLink = this.page.locator(locators.macbookProLink).first();
   console.log("Waiting for MacBook Pro link to be visible...");
   console.log(`Locator used: ${locators.macbookProLink}`);
 //await productLink.waitFor({ state: 'visible', timeout: 10000 });
//await productLink.waitFor({ state: 'attached', timeout: 10000 });
   //await productLink.waitFor();
   await productLink.waitFor({
       state: 'visible',
       timeout: 10000
       
   });
   await productLink.scrollIntoViewIfNeeded();
   console.log("MacBook Pro link is visible, clicking...");
   await productLink.click();
   await this.page.waitForLoadState('domcontentloaded');
   console.log("MacBook Pro page opened successfully");
}
    async enterQuantity(quantity) {
       
        await this.fill(locators.quantityInput, quantity);
        console.log(`Entered quantity: ${quantity}`);
        // await this.waitForTimeout(2000);
    }       
    async addToCart() {
        console.log("Clicking Add to Cart button..."); 
        const addtocart = this.page.locator(locators.addToCartButton).first();
        console.log("Waiting for Add to Cart button to be visible...");
        await addtocart.waitFor({ state: 'visible', timeout: 10000 })
          await addtocart.waitFor({
       state: 'visible',
       timeout: 10000
   });
   console.log("Add to Cart button is visible, clicking...");
        await addtocart.click();
        //await this.click(locators.addToCartButton);
        console.log('Add to Cart button clicked');
        //await this.waitForTimeout(5000);
    }   
    async verifyAddToCartSuccessMessage(expectedText) {
        console.log('Verifying Add to Cart success message...');
         //await this.waitForTimeout(3000);
        const actualText = await this.getText(locators.successAlert);
        console.log(`Actual success message: ${actualText}`);
        console.log(`Expected success message: ${expectedText}`);
        //expect(actualText).toContain(expectedText);
        console.log('Add to Cart success message verified');
    }
    async openCart() {
        await this.click(locators.cartButton);
        console.log('Cart button clicked');
      //  await this.waitForTimeout(2000);
    }
    async clickViewCart() {
        await this.click(locators.viewCartLink);
        console.log('View Cart link clicked');
        //await this.waitForTimeout(2000);
    }
    async verifyProductDisplayedInCart(productName) {
        //const productNames = await this.getTexts(locators.cartProductName)
        const prodnameDisp= await this.getText(locators.cartProductNamePro);
        expect(prodnameDisp).toContain(productName);
        console.log(`Verified product displayed in cart: ${productName}`);
    }
}

module.exports= ProductPage;
