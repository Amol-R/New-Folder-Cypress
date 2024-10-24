///<reference types = "Cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('My Suit', () => {
  it('Login with Valid cerdentials', () => {
    cy.Login()
    cy.contains('Admin').click()
    cy.get('.oxd-table-body').contains('.oxd-table-card', 'Virat Kohli').then(tablerow => {
      cy.wrap(tablerow).find('button i[class="oxd-icon bi-pencil-fill"]').click()

    })

    cy.get('.oxd-grid-item--gutters:nth-child(1)').
      contains('oxd-select-text--active').click({ force: true })
    cy.contains('ESS').click({ force: true })
    cy.get('button[type="submit"]').click()

  })
})



