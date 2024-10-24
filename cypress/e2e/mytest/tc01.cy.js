/// <reference types = "Cypress" />

describe('my first trst',()=>{
    it('Login to orange HRM',()=>{
        cy.visit('https://www.hyrtutorials.com/p/css-selectors-practice.html')
        cy.get('input[name="username"]').type("Amolrindhe@gmail.com")
        cy.get('input[type="password"]').type('amol@121')
        cy.get('button[type="submit"]').click()

        
              
    })
    it('TC02',()=>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get('input[name="username"]').type("Amolrindhe@gmail.com")
        // cy.get('input[type="password"]').type('amol@121')
        // cy.get('button[type="submit"]').click()
        // cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
              
    })
})

