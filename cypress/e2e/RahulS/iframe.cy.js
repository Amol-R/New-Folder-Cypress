///<reference types = "Cypress"/>
///<reference types="cypress-iframe" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe.only('OrangeHRM', () => {
    it('iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find('.nav-outer  ul li:nth-child(5)').click()
       cy.iframe().find('.pricing-title').should('have.length',2)

    })

})