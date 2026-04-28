module.exports = {
 searchInput: 'input[name="search"]',
 searchButton: 'button.btn.btn-default.btn-lg',
 searchDescriptionCheckbox: 'input[name="description"]',
 //macbookProLink: '(//a[contains(@href,"macbook+pro")])[3]',
 macbookProLink: '//a[text()="MacBook Pro"]',
 quantityInput: '#input-quantity',
 //addToCartButton: '//button[@class="btn btn-primary btn-lg btn-block"]',
 addToCartButton: '//button[contains(@onclick,"cart.add")]',
 successAlert: '//div[@class="alert alert-success alert-dismissible"]',
 cartButton: '#cart',
 viewCartLink: 'a[href*="route=checkout/cart"]',
 //cartProductName: 'td.text-left a',
 cartProductNamePro: '(//a[contains(text(),"Pro")])[2]'
};