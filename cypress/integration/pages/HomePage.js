// cypress/integration/pages/HomePage.js
class HomePage {
    visit() {
        cy.visit('http://demowebshop.tricentis.com/');
    }

    getSearchBox() {
        return cy.get('input[name="q"]');
    }

    getSearchButton() {
        return cy.get('input[value="Search"]');
    }

    searchProduct(product) {
        this.getSearchBox().type(product);
        this.getSearchButton().click();
    }
}

export default HomePage;
