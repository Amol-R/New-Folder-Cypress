///<reference types = "Cypress"/>
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('OrangeHRM', () => {
    it('FileUplod Example', () => {
        
        const path = 'DevOps2-1024x642-1.png'
        cy.login()
        cy.get('ul li:nth-child(6)').click()
        cy.get('button[type="button"]:nth-child(2)').click()
        cy.get('.oxd-file-div').attachFile(path)
        cy.wait(4000)
        // cy.get('.oxd-file-input-div').should('have.text','DevOps2-1024x642-1.png')
    })

})