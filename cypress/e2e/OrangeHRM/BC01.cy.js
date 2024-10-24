///<reference types = "Cypress" />

describe("My first test", () => {

  it.only("Login with invalid cerdential", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Amol')
    cy.get('input[type="password"]').type('Amol123')
    cy.get('button[type="submit"]').click()
   
  })

  it.only("Login with valid Credential", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('p[class="oxd-text oxd-text--p"]:nth-child(1)').each(($ele, index, $list) => {
      let uname1 = $ele.text()
      let uname = uname1.split(' ')
      cy.get('input[name="username"]').type(uname[2])
    })
    cy.get('p[class="oxd-text oxd-text--p"]:nth-child(2)').each(($ele, index, $list) => {
      let pass1 = $ele.text()
      let pass = pass1.split(' ')
      cy.get('input[type="password"]').type(pass[2])
    })

    // cy.get('input[name="username"]').type(uname)
    // cy.get('input[type="password"]').type(pass)
    cy.get('button[type="submit"]').click()
  })

  it("Login with invalid cerdential", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Amol')
    cy.get('input[type="password"]').type('Amol123')
    cy.get('button[type="submit"]').click()

  })

})

describe('RahulS', () => {

  it('Checkbox', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[value="option2"]').click()
    cy.get('input[value="option3"]').click()
  })

  it('Dynamic dropdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[placeholder="Type to Select Countries"]').type('ind')
    cy.get('.ui-menu-item').each(($ele, index, $list) => {
      if ($ele.text() === 'India')
        $ele.click()
    })
    cy.get('input[placeholder="Type to Select Countries"]').should('have.value', "India")

  })

  it('Web Table', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('tbody').contains('td','Learn JMETER from Scratch').next().should('contain','25')
      // cy.get('.oxd-table-body').contains('tr', 'nitin patil').contains('td',eq(5)).click()
       

  })


  // it('Web tables', () => {
    //     //  cy.get('table[name="courses"]').contains('td', 'Testing + Bugzilla + SQL + Agile').next().click()
    //     // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

        // cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        //     const text = $e1.text()
        //     if (text.includes("Python")) {
        //         cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
        //             const priceText = price.text()
        //             expect(priceText).to.equal('25')
    //             })
    //         }
    //     })
    // })


})




// let a = 20
// let b = "20"

// a==b  // true
// a===b  // false

// cy.on('window:alert',(amol)=>{

//   expect(amol).to.eq('Hello , share this practice page and share your knowledge')

// })


