// cypress/integration/pages/CartPage.js
class CartPage {
    visit() {
        cy.visit('http://demowebshop.tricentis.com/cart');
    }

    getCartItem() {
        return cy.get('.cart-item-row');
    }

    proceedToCheckout() {
        cy.get('input[name="checkout"]').click();
    }
}

export default CartPage;
