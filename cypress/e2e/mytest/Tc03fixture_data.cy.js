///<reference types = "Cypress" />

import data from '../../fixtures/orange.json'



describe('Orange', ()=>{
it('Test with invalid Credential',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').type(data.InvalidU1)
cy.get('input[name="password"]').type(data.InvalidPass)
cy.get('button[type="submit"]').click()
cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')

})

it('Test with Valid Credential',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type(data.ValidU)
    cy.get('input[name="password"]').type(data.ValidPass)
    cy.get('button[type="submit"]').click()
    // cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')
    
    })



})