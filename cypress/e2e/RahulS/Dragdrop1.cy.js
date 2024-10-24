///<reference types = "Cypress" />


    describe('Dragtest', () => {
        it.skip('should dragndrop', () => {
            cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
      
            cy.get('#box1').drag('#box106');
        })
      })
 