///<reference types = "Cypress"/>

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Automationexercise', () => {
    it('FileUplod Example', () => {

        const path =  'image2.png'
        cy.visit('https://automationexercise.com/')
        cy.get('ul li a[href="/contact_us"]').click()
        cy.wait(2000)
        cy.get('input[type="file"]').attachFile(path)
        cy.wait(2000)
        cy.get('[data-top="570.906241432373"]').should('contain',path)
    })

    it.skip('uploads a file and verifies the success', () => {
        // Visit the file upload page
        cy.visit('https://the-internet.herokuapp.com/upload');
        // Get the file input element and attach a file
        const fileName = 'image2.png';
        cy.get('#file-upload').attachFile(fileName);
        // Click the submit button
        cy.get('#file-submit').click();
        // Verify that the upload was successful
        cy.get('#uploaded-files').should('contain', fileName);
        // Get the success message element and verify its text
        const successMessage = 'File Uploaded!';
        cy.get('.example > h3').should('contain', successMessage);
        
        });

})


