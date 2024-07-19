// cypress/integration/tests/DemoWebShopTests.spec.js
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Demo Web Shop Functional Tests', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    it('should display products on the homepage', () => {
        homePage.visit();
        cy.get('.product-item').should('have.length.greaterThan', 0);
    });

    it('should search for a product', () => {
        homePage.visit();
        homePage.searchProduct('Laptop');
        cy.url().should('include', 'search');
        cy.contains('Laptop').should('exist');
    });

    it('should add a product to the cart', () => {
        homePage.visit();
        homePage.searchProduct('Laptop');
        cy.contains('Laptop').click();
        productPage.addToCart();
        cy.get('.cart-qty').should('contain', '1');
    });

    it('should display the added product in the cart', () => {
        cartPage.visit();
        cartPage.getCartItem().should('have.length', 1);
    });

    it('should enter billing address during checkout', () => {
        homePage.visit();
        homePage.searchProduct('Laptop');
        cy.contains('Laptop').click();
        productPage.addToCart();
        cy.get('.cart-qty').click();
        cartPage.proceedToCheckout();
        
        const address = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            country: 'United States',
            city: 'New York',
            address1: '123 Main St',
            zipCode: '10001',
            phoneNumber: '1234567890'
        };

        checkoutPage.enterBillingAddress(address);
        cy.contains('Shipping method').should('exist');
    });
});
