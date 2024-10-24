///<reference types = "Cypress" />
import data from "../../fixtures/orange.json"
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('My Suit2',()=>{
    it('Login with Valid cerdentials',()=>{
        cy.Login()
        cy.contains('Admin').click()
        cy.get('input[class="oxd-input oxd-input--active"]:first-child').type(data.Username)
        cy.get('.oxd-grid-item:nth-child(2)').contains('Select').click({ force: true })
        cy.get('.oxd-grid-item:nth-child(2)').contains('Admin').click({ force: true })
        cy.get('.oxd-grid-item:nth-child(2)').should('contain',"Admin")
        cy.get('.oxd-grid-item:nth-child(3)').type(data.Employee_Name)
        cy.get('.oxd-grid-item:nth-child(4)').contains('Select').click({ force: true })
        cy.get('.oxd-grid-item:nth-child(4)').contains('Disabled').click({ force: true })
        cy.get('.oxd-grid-item:nth-child(4)').should('contain',"Disabled")

   })
   cy.get('.oxd-grid-item:first-child').contains('Select').click({ force: true })
   cy.get('.oxd-grid-item:first-child').contains('Admin').click({ force: true })
    
})

// [class="oxd-input oxd-input--active"]



