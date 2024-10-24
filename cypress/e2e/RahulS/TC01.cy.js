///<reference types = "Cypress"/>

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()
describe('my first trst', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
    })   

    it('Static Dropdown', () => {
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
    })
    it.only('Dynamic Dropdown', () => {
        cy.get('input[id="autocomplete"]').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if ($el.text() === "India") {
                cy.wrap($el).click()
                // $el.click()
            }
        })
        cy.get('input[id="autocomplete"]').should('have.value', 'India')

        // cy.get('input[class="inputs ui-autocomplete-input"]').should('have.value', 'India')

        //............................................................///////////////////
        // cy.get('input[id="autocomplete"]').type('ind')
        // cy.get('.ui-menu-item').eq(15).click()
        // cy.get('input[class="inputs ui-autocomplete-input"]').should('have.value', 'India')
    })
    it('Check Box & Radio Button ', () => {
        cy.get('#checkBoxOption2').check()
        cy.get('#checkBoxOption2').should('be.checked')
        // Radio Button
        cy.get('input[value="radio3"]').click()
        cy.get('input[value="radio3"]').should('be.checked')
    })
    it('Visible and invisible elements', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
    it('Handles Alerts', () => {
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert', (abc) => {
            expect(abc).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (abc) => {
            expect(abc).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
    it('Handling Child tab', () => {
        cy.get('a[id="opentab"]').invoke('removeAttr', 'target').click()
        cy.url().should()
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get('.nav-item a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain.text', 'QAClick Academy ')
            // cy.contains('QAClick Academy').should('have.text', 'Welcome to QAClick Academy ')
        })
    })
    // it('Web tables', () => {
    //     //  cy.get('table[name="courses"]').contains('td', 'Testing + Bugzilla + SQL + Agile').next().click()
    //     // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    //     cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
    //         const text = $e1.text()
    //         if (text.includes("Python")) {
    //             cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
    //                 const priceText = price.text()
    //                 expect(priceText).to.equal('25')
    //             })
    //         }
    //     })
    // })

    it('Mouse hover', () => {
        // cy.get('div .mouse-hover').click({force : true})
        cy.get('div .mouse-hover').invoke('show')
        cy.contains('Top').click({force : true})                                
        cy.url().should('include','top1')
            
    })

    it('Handling Frames', () => {

    })
    it('', () => {

    })

})