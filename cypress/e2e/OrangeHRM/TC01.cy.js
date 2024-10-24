///<reference types = "Cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('My Suit',()=>{
    it('Login with Valid cerdentials',()=>{
        cy.Login()
        cy.contains('Admin').click()
        cy.get('input[class="oxd-input oxd-input--active"]:first-child').type('Amol')


        // cy.wait(3000)
        // cy.get('.oxd-grid-item:nth-child(2)').click({ force: true })
        // cy.get('Select').
        // select('ESS', { force: true })
        // find("Select").click()
        // .select('banana', { force: true })
        // cy.get("cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')").select('Admin')
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        // cy.get('.oxd-select-wrapper').select('Admin', { force: true })
        
        cy.get('.oxd-grid-item:nth-child(2)').contains('Select').click({ force: true })
        cy.contains('ESS').click({ force: true })
        
        cy.get('.oxd-grid-item:nth-child(2)').should('contain',"ESS")

        // cy.get('.oxd-grid-item:nth-child(2)').click({ force: true })
    //   .contains('Select')
    //   .click()
    // //   .find('.oxd-select-text-input')
    // //   .eq(1)
    //   .focus()
    // cy.contains('Admin').click({ force: true })


    // cy.contains('.oxd-select-wrapper') // find react-select component     
    // .click() // click to open dropdown
    // .get('.oxd-select-dropdown') // find opened dropdown
    // // .find('.react-select__option') // find all options
    // .first() 
    // .click() // click on first option






   })
})



