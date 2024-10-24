/// <reference types = "Cypress"/>

describe('login suit',()=>{
    it('validate login page with invalid credential',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Amol')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Amol123')
      cy.get('.oxd-button').click()
    })

    it('validate login page with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
    
    })

})