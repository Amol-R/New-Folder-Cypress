///<reference types = 'Cypress'/>


describe('API',()=>{
    it('GET Call',()=>{
        cy.request('GET','http://216.10.245.166/Library/GetBook.php?ID=bcd227')
        .its('status').should('equal',200)
    })

    it('POST call',()=>{
        cy.request({
            method: 'POST',
            url: 'http://216.10.245.166/Library/Addbook.php',
            body: {

                "name":"Learn Appium Automation with Java",
                "isbn":"bwwd",
                "aisle":"2232",
                "author":"John foe"
                }
        })
        .its('status').should('equal',200)
    })
})