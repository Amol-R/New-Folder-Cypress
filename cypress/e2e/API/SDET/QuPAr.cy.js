describe('stud api', () => {
   

    it('GET call', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: {page: 2}           // Query parameter
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.status).equal(200)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).have.property('id',7)
            expect(response.body.data[0]).have.property('first_name','Michael')

        })
    })
})