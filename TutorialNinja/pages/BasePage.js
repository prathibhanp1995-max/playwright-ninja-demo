class BasePage {
    constructor(page) {
        this.page = page;
    }       
     async waitForTimeout(timeout = 3000) { 
        await this.page.waitForTimeout(timeout);
    }       

    async click(selector) {
        await this.page.click(selector);
    }   

    async clickWithJS(selector) {
        await this.page.evaluate((sel) => {
            document.querySelector(sel).click();
        }, selector);
    }

    async fill(selector, text) {
        await this.page.fill(selector, text);      
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async hover(selector) {
        await this.page.hover(selector);
    }

    async waitFor(selector) {
        await this.page.waitForSelector(selector);
    }    
    
    async selectOption(selector, option) {
        await this.page.selectOption(selector, option);
    }

    async takeScreenshot(name) {
 await this.page.screenshot({
   path: `screenshots/${name}.png`,
   fullPage: true
 });
}
        

}

module.exports = BasePage;  
    