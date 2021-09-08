/// <reference types="Cypress" />

describe('First Cypress Test', function()
{
    it('Login To Productsup Platform', function()
    {
           
        cy.visit("https://platform.productsup.com/login");
        cy.get("input[name='username']").type('vamsi.manohar@productsup.com');
        cy.get("pup-button button").click();
        

    });
})