///<reference types ="Cypress"/>

import data from '../../fixtures/example.json'

describe("API Test",()=>{
it('TC01',()=>{
cy.visit('https://angular.realworld.io')
cy.get('a[routerlink="/login"]').click()
cy.get('input[placeholder="Email"]').type('amolrindhe.qa1@gmail.com')
cy.get('input[placeholder="Password"]').type('amol100')
cy.get('button').click()

})

})