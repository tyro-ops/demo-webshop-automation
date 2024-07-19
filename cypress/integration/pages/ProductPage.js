// cypress/integration/pages/ProductPage.js
class ProductPage {
    getProductTitle() {
        return cy.get('.product-title');
    }

    addToCart() {
        cy.get('input[value="Add to cart"]').click();
    }
}

export default ProductPage;
