
//first-visual-test.cy.js
describe('Cypress Visual Testing Demo', () => {
    it.skip('Navigate to Browserstack home page', () => {
    cy.visit('https://browserstack.com')
    cy.compareSnapshot('home-page')
    })
    })