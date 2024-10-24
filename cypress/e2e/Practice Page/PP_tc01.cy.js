///<reference types = "cypress" />


describe('My Test',()=>{

beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})

it('checkBox',()=>{
   
   cy.get('#checkBoxOption3').click()
//    cy.get('#checkBoxOption3').check()

})
it('tc02',()=>{
        cy.get('input[value="radio2"]').click()
})
it('tc03',()=>{
    cy.get('#dropdown-class-example').click()
})
it('tc04',()=>{
    
})
it('tc05',()=>{
    
})
it('tc06',()=>{
    
cy.get('css').should('be.visible')
cy.get('css of hide ').click()
cy.get('css').should('not.be.visible')
cy.get('css of show ').click()
cy.get('css').should('be.visible')

})


})