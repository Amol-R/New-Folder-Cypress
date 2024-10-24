import 'cypress-file-upload';
import 'cypress-iframe';
import '@4tw/cypress-drag-drop' ;

require('@4tw/cypress-drag-drop') 
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get('input[name="username"]').type("Admin")
//     cy.get('input[type="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()
// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Login',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include',"dashboard/index")
})   

