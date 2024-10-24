describe("Api Test", ()=>{
    
let token = null

before("AccessToken",()=>{
    cy.request({
        method: 'POST',
        url : 'https://simple-books-api.glitch.me/api-clients/',
        hesders : {
            'Content-type' : "application/json"
        },
        body : {
            "clientName": "Test",
            "clientEmail": Math.random().toString(30).substring(2)+"@gmail.com"
         }
    }).then((responce)=>{
        token = responce.body.accessToken
        // console.log(token)
    })
})

before("Sample order",()=>{
    cy.request({
        method: 'POST',
        url : 'https://simple-books-api.glitch.me/orders/',
        headers : {
            'Content-type' : "application/json",
            'Authorization': "Bearer " +token
          
        },
        body : {
            "bookId": 1,
            "customerName": "abcdefg"
        }
    }).then((responce)=>{
        expect(responce.status).to.eq(201)
        expect(responce.body.created).to .eq(true)
    })
})

it("fetch order", ()=>{
    cy.request({
        method : "GET",
        url : "https://simple-books-api.glitch.me/orders/",
        headers : {
            'Content-type' : "application/json",
            'Authorization': "Bearer " + token
        },
        cookies : {
            'cookieName' : 'mycookie'
        }
    }).then((responce)=>{
        expect(responce.status).to.eq(200)
        expect(responce.body).has.length(1)
    })
})

})