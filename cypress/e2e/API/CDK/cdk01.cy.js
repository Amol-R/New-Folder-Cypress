///<reference types = "Cypress"/>
///<reference types="cypress-iframe" />

describe('CDK Global', () => {
    it('iframe', () => {
        cy.visit('https://app-unify.app-dit.connectcdk.com/admin/applications')
        cy.wait(9000)
        cy.get('#emailId').type('unify.user1@mailinator.com')
        cy.get('#password').type('Cdk-0102')
        cy.get('button[data-testid="primary-button"]').click()
        cy.wait(5000)
        cy.get('div[data-testid="card-fortellis-marketplace-operations"]').click()
        cy.frameLoaded('#FORTELLISMP').should('be.visible')
        cy.get('path[fill="#FFFFFE"]').click()
        cy.frameLoaded('#FORTELLISMP').should('not.be.visible')

    })

})