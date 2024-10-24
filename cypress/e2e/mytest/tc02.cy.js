/// <reference types = "Cypress" />

import data from "../../fixtures/TcData.json"


describe('Validate Login page', () => {

  it("With Invalide credentials", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get('input[name="username"]').type('Amol')
    cy.get('input[type="password"]').type('Amol100')
    cy.get('button[type="submit"]').click()
    // cy.get('input[name="username"]').type(data.username1)
    // cy.get('input[type="password"]').type(data.password1)
    // cy.get('button[type="submit"]').click()
    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')
  })

  it("With valide credentials", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    // cy.get('input[name="username"]').type(data.username11)
    // cy.get('input[type="password"]').type(data.password11)
    // cy.get('button[type="submit"]').click()
   
  })
})


// import data from "../../fixtures/example.json"