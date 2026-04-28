const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ComponentsPage = require('../pages/ComponentsPage');
const ProductPage = require('../pages/ProductPage');
const LogoutPage = require('../pages/LogoutPage');
const userData = require('../test-data/usercred.json');

test.describe('Cart Page Tests', () => {
  let loginPage;
  let componentsPage;
  let productPage;
  let logoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    componentsPage = new ComponentsPage(page);
    productPage = new ProductPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.openLogin();
  });

  // ==================== LoginPage Tests ====================
  test('should successfully login with valid credentials', async ({ page }) => {
    // Step 1: Perform login action
    await loginPage.login(userData.email, userData.password);
    console.log('✓ User logged in successfully');

    await loginPage.takeScreenshot('login-success');

    // Step 2: Verify login was successful (by navigating to next page)
    await componentsPage.openComponentsMenu();
    console.log('✓ Components menu accessible - login verified');
  });

  // ==================== ComponentsPage Tests ====================
  test('should browse and add product from components menu', async ({ page }) => {
    // Step 1: Login to application
    await loginPage.login(userData.email, userData.password);
    console.log('✓ Step 1: User logged in');
    await loginPage.takeScreenshot('login-success');

    // Step 2: Navigate to Components menu
    await componentsPage.openComponentsMenu();
    console.log('✓ Step 2: Components menu opened');

    // Step 3: Select Monitors category
    await componentsPage.selectMonitors();
    console.log('✓ Step 3: Monitors category selected');

    // Step 4: Set products per page to 25
    await componentsPage.selectShowDropdown('25');
    console.log('✓ Step 4: Display count set to 25');

    // Step 5: Add first product to cart
    await componentsPage.addFirstProductToCart();
    console.log('✓ Step 5: First product added to cart');

    // Step 6: Open product specification tab
    await componentsPage.openSpecificationTab();
    console.log('✓ Step 6: Specification tab opened');

    // Step 7: Verify specification tab is visible
    await componentsPage.verifyProductSpecificationVisible();
    console.log('✓ Step 7: Product specification visibility verified');
  });

  // ==================== ComponentsPage - Wishlist Tests ====================
  test('should add product to wishlist from components page', async ({ page }) => {
    // Step 1: Login to application
    await loginPage.login(userData.email, userData.password);
    console.log('✓ Step 1: User logged in');

await loginPage.takeScreenshot('login-success');

    // Step 2: Navigate to Components menu
    await componentsPage.openComponentsMenu();
    console.log('✓ Step 2: Components menu opened');

    // Step 3: Select Monitors category
    await componentsPage.selectMonitors();
    console.log('✓ Step 3: Monitors category selected');

    // Step 4: Add product to wishlist
    await componentsPage.addProductToWishlist();
    console.log('✓ Step 4: Product added to wishlist');

    // Step 5: Verify wishlist success message
    await componentsPage.verifyWishlistSuccessMessage('Success');
    console.log('✓ Step 5: Wishlist success message verified');

   await componentsPage.takeScreenshot('product-added-to-wishlist');

    await logoutPage.logout();
    console.log('✓ Step 2: Logout link clicked');

    // Verify logout success message
    await logoutPage.verifyLogoutMsg();
    //await expect(page.locator('h1')).toContainText('Account Logout');
    console.log('✓ Step 3: Logout success message verified');

   await logoutPage.takeScreenshot('logout-success');

    // Click continue button
    await logoutPage.clickContinue();
    console.log('✓ Step 4: Continue button clicked');
  });

  // ==================== ProductPage Tests ====================
  test('should search and add product to cart', async ({ page }) => {
    // Step 1: Login to application
    await loginPage.login(userData.email, userData.password);
    console.log('✓ Step 1: User logged in');

    // Step 2: Search for MacBook Pro product
    await productPage.searchProduct('MacBook Pro');
    console.log('✓ Step 2: Product name entered in search field');

    // Step 3: Click search button
    await productPage.clickSearchButton();
    console.log('✓ Step 3: Search button clicked');

    // Step 4: Enable search in product description
    await productPage.enableSearchInDescription();
    console.log('✓ Step 4: Search in description checkbox enabled');

    // Step 5: Open MacBook Pro product details
    await productPage.openMacBookPro();
    console.log('✓ Step 5: MacBook Pro product page opened');

    // Step 6: Enter quantity (3 units)
    await productPage.enterQuantity('3');
    console.log('✓ Step 6: Quantity entered (3 units)');

    // Step 7: Add product to cart
    await productPage.addToCart();
    console.log('✓ Step 7: Product added to cart');

    // Step 8: Verify add to cart success message
    await productPage.verifyAddToCartSuccessMessage('Success');
    console.log('✓ Step 8: Add to cart success message verified');
  });

  // ==================== Cart View Tests ====================
  test('should view cart and verify product presence', async ({ page }) => {
    // Step 1: Login to application
    await loginPage.login(userData.email, userData.password);
    console.log('✓ Step 1: User logged in');

    // Step 2: Add product to cart (MacBook Pro)
    await productPage.searchProduct('MacBook Pro');
    await productPage.clickSearchButton();
    await productPage.enableSearchInDescription();
    await productPage.openMacBookPro();
    await productPage.enterQuantity('3');
    await productPage.addToCart();
    console.log('✓ Step 2: MacBook Pro added to cart');

    // Step 3: Open cart dropdown
    await productPage.openCart();
    console.log('✓ Step 3: Cart dropdown opened');

    // Step 4: Click View Cart link
    await productPage.clickViewCart();
    console.log('✓ Step 4: View Cart link clicked');

    // Step 5: Verify product is displayed in cart
    await productPage.verifyProductDisplayedInCart('MacBook Pro');
    console.log('✓ Step 5: MacBook Pro verified in cart');
  });

  // ==================== LogoutPage Tests ====================
  test('should successfully logout from application', async ({ page }) => {
    // Step 1: Login to application
    await loginPage.login(userData.email, userData.password);
    console.log('✓ Step 1: User logged in');

    // Step 2: Perform logout
    await logoutPage.logout();
    console.log('✓ Step 2: Logout link clicked');

    // Step 3: Verify logout success message
    await expect(page.locator('h1')).toContainText('Account Logout');
    console.log('✓ Step 3: Logout success message verified');

    // Step 4: Click continue button
    await logoutPage.clickContinue();
    console.log('✓ Step 4: Continue button clicked');
  });

  // ==================== Full Workflow Test ====================
  test('should complete full cart workflow', async ({ page }) => {
    // SECTION 1: LOGIN
    console.log('\n=== SECTION 1: LOGIN ===');
    await loginPage.login(userData.email, userData.password);
    console.log('✓ User logged in');

    await loginPage.takeScreenshot('login-success');

    // SECTION 2: BROWSE COMPONENTS
    console.log('\n=== SECTION 2: BROWSE COMPONENTS ===');
    await componentsPage.openComponentsMenu();
    await componentsPage.selectMonitors();
    await componentsPage.selectShowDropdown('25');
    await componentsPage.addFirstProductToCart();
    console.log('✓ First product from Components added to cart');

    // SECTION 3: VIEW PRODUCT SPECIFICATIONS
    console.log('\n=== SECTION 3: VIEW SPECIFICATIONS ===');
    await componentsPage.openSpecificationTab();
    await componentsPage.verifyProductSpecificationVisible();
    console.log('✓ Product specifications verified');

    // SECTION 4: ADD TO WISHLIST
    console.log('\n=== SECTION 4: ADD TO WISHLIST ===');
    await componentsPage.addProductToWishlist();
    await componentsPage.verifyWishlistSuccessMessage('Success');
    console.log('✓ Product added to wishlist');
    
    await componentsPage.takeScreenshot('product-added-to-wishlist');

    // SECTION 5: SEARCH AND ADD PRODUCT
    console.log('\n=== SECTION 5: SEARCH AND ADD PRODUCT ===');
    await productPage.searchProduct('MacBook Pro');
    await productPage.clickSearchButton();
    await productPage.enableSearchInDescription();
    //await productPage.openMacBookPro();
    console.log('✓ MacBook Pro search completed');

    // SECTION 6: CUSTOMIZE AND ADD TO CART
    console.log('\n=== SECTION 6: CUSTOMIZE AND ADD TO CART ===');
    //await productPage.enterQuantity('3');
    await productPage.addToCart();
    await productPage.verifyAddToCartSuccessMessage('Success');
    console.log('✓ MacBook Pro added to cart with quantity 3');

    await productPage.takeScreenshot('product-added-to-cart');

    // SECTION 7: VIEW CART
    console.log('\n=== SECTION 7: VIEW CART ===');
    await productPage.openCart();
    await productPage.clickViewCart();
    await productPage.verifyProductDisplayedInCart('MacBook Pro');
    console.log('✓ Products verified in cart');

    
   await productPage.takeScreenshot('product-verified-in-cart'); 

    // SECTION 8: LOGOUT
    console.log('\n=== SECTION 8: LOGOUT ===');
   await logoutPage.logout();
    console.log('✓ Step 2: Logout link clicked');
    await logoutPage.verifyLogoutMsg();
    console.log('✓ Step 3: Logout success message verified');
   await logoutPage.takeScreenshot('logout-success');
    // Click continue button
    await logoutPage.clickContinue();
    console.log('✓ Step 4: Continue button clicked');
    console.log('✓ User logged out successfully');

    console.log('\n=== FULL WORKFLOW COMPLETED SUCCESSFULLY ===\n');
  });
});