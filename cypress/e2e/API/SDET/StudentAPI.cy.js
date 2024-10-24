///<reference types = "Cypress"/>

describe('stud api', () => {
    it.only('teat API', () => {
        cy.request('GET', 'http://localhost:3000/Students/4')
            .its('status').should('equal', 200)
    })

    it('Post call', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/Students",
            body: {
                "name": "Ritesh",
                "location": "Akola",
                "phone": "1234561111",
                "courses": [
                    "JavaScript",
                    "Cypress"
                ]
            }
        })
    })
})