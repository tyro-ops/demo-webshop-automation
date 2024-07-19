// cypress/integration/pages/CheckoutPage.js
class CheckoutPage {
    enterBillingAddress(address) {
        cy.get('#BillingNewAddress_FirstName').type(address.firstName);
        cy.get('#BillingNewAddress_LastName').type(address.lastName);
        cy.get('#BillingNewAddress_Email').type(address.email);
        cy.get('#BillingNewAddress_CountryId').select(address.country);
        cy.get('#BillingNewAddress_City').type(address.city);
        cy.get('#BillingNewAddress_Address1').type(address.address1);
        cy.get('#BillingNewAddress_ZipPostalCode').type(address.zipCode);
        cy.get('#BillingNewAddress_PhoneNumber').type(address.phoneNumber);
        cy.get('input[value="Continue"]').click();
    }
}

export default CheckoutPage;
