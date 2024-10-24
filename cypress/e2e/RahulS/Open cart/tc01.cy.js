///<reference types = "Cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('My Suit1',()=>{
    it('Login with Valid cerdentials',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('br')
        cy.get('div .products-wrapper .stepper-input .increment').first().click()
        cy.contains('ADD TO CART').should('have.css','color','rgb(255, 255, 255)')
        cy.contains('ADD TO CART').click()
        cy.get('a.cart-icon').should('have.css','color','rgb(0, 123, 255)')
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').should('have.css','color','rgb(255, 255, 255)')
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.url().should('contain','seleniumPractise/#/cart')
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
        // cy.get('tbody tr td:nth-child(2)').should('contain',"Brocolli")
        // cy.get('tbody tr td:nth-child(3)').should('contain',"2")
        // cy.get('tbody tr td:nth-child(4)').should('contain','120')
        // cy.get('tbody tr td:nth-child(5)').should('contain','240')
        // cy.get('.promoCode').type("ABC889")
        // cy.get('.promoBtn').should('have.css','color','rgb(255, 255, 255)')
        // cy.get('.promoBtn').click()
        // cy.wait(3000)
        // cy.get('.promoInfo').should('contain','Invalid code ..!')
        // cy.contains('Place Order').click()
        // cy.url().should('contain',"#/country")
        // cy.get('[style="width: 200px;"]').select('India')
        // cy.get('.chkAgree').check().should('be.checked')
        // cy.contains('Proceed').click()


        // cy.url().should('contain','seleniumPractise/#/cart')

   })

})



// Thank you, your order has been placed successfully
// You'll be redirected to Home page shortly!!