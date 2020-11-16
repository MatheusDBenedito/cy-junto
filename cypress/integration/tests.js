/// <reference types="cypress" />
import { fuelSavings } from '../pages/fuelSavings';

var mpg1 = (Math.random() * (20 - 5) + 5).toFixed(2)
var mpg2 = (Math.random() * (20 - 5) + 5).toFixed(2)
var price1 = (Math.random() * (20 - 5) + 5).toFixed(2)
var price2 = (Math.random() * (20 - 5) + 5).toFixed(2) 
var milhas = (Math.random() * (1000 - 100) + 100).toFixed()
var data = new Date();

context('tests ', () => {
  beforeEach(() => {
    cy.visit(fuelSavings.base_url)
  })
 
    it('Teste dos campos', () => { 
      cy.get(fuelSavings.newMpg).clear().type(mpg1).should("have.value", mpg1)
      cy.get(fuelSavings.tradeMpg).clear().type(mpg2).should("have.value", mpg2)
      cy.get(fuelSavings.newPpg).clear().type(price1).should("have.value", price1)
      cy.get(fuelSavings.tradePpg).clear().type(price2).should("have.value", price2)
      cy.get(fuelSavings.milesDriven).clear().type(milhas).should("have.value", milhas)
      cy.get(fuelSavings.dropMilesDriven).select('week').should("have.value", "week")
      cy.get(fuelSavings.dropMilesDriven).select('month').should("have.value", "month")
      cy.get(fuelSavings.dropMilesDriven).select('year').should("have.value", "year")
      cy.get(fuelSavings.save).click
    }) 

    it('Teste dos campos obrigatórios', () => { 

      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible') 

      cy.get(fuelSavings.newMpg).clear().type(mpg1)
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      cy.get(fuelSavings.newMpg).clear()

      cy.get(fuelSavings.tradeMpg).clear().type(mpg2)
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      cy.get(fuelSavings.tradeMpg).clear()

      cy.get(fuelSavings.newPpg).clear().type(price1)
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      cy.get(fuelSavings.newPpg).clear()

      cy.get(fuelSavings.tradePpg).clear().type(price2)
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      cy.get(fuelSavings.tradePpg).clear()

      cy.get(fuelSavings.milesDriven).clear().type(milhas)
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      cy.get(fuelSavings.milesDriven).clear()

      cy.get(fuelSavings.dropMilesDriven).select('week')
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      })

    it('Teste para não aceitar texto', () => { 
      cy.get(fuelSavings.newMpg).clear().type('10,0')
      cy.get(fuelSavings.tradeMpg).clear().type('18,0')
      cy.get(fuelSavings.newPpg).clear().type('3,99')
      cy.get(fuelSavings.tradePpg).clear().type('4,99')
      cy.get(fuelSavings.milesDriven).clear().type('1000,0')
      cy.get(fuelSavings.save).click
      cy.get(fuelSavings.results).should('not.be.visible')
      }) 


    it('Teste de loss ou savings', () => { 
      cy.get(fuelSavings.newMpg).clear().type(mpg1)
      cy.get(fuelSavings.tradeMpg).clear().type(mpg2)
      cy.get(fuelSavings.newPpg).clear().type(price1)
      cy.get(fuelSavings.tradePpg).clear().type(price2)
      cy.get(fuelSavings.milesDriven).clear().type(milhas)
      cy.get(fuelSavings.dropMilesDriven).select('Year').should("have.value", "year")
      cy.get(fuelSavings.save).click
    
        var x1 = (milhas / mpg1) * price1; 
        var x2 = (milhas / mpg2) * price2;
          if (x1 > x2){
            cy.get(fuelSavings.results).should('contain', 'Loss')
          }
          else if (x1 <= x2)
            cy.get(fuelSavings.results).should('contain', 'Savings')
      })
})
