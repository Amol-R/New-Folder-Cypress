///<reference types = "Cypress" />
import data from "../../fixtures/OrangeHRM.json"
describe ('TS01',()=>{

it('Login with valid uname & pass',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').type(data.Username)
cy.get('input[name="password"]').type(data.Password)
cy.get('button[type="submit"]').click()
})

})
