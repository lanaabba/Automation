/// <reference types="Cypress" />

describe('assigment ', () => {
  it('Calculate and display prices ', () => {
        cy.visit("https://www.automationteststore.com/");
        let sumOldPrices = 0;
        let sumNewPrices = 0;

        cy.get('#special > .container-fluid').find('.pricenew').each((newElement) => {
          const newPrice = parseFloat(newElement.text().replace('$', ''));
          cy.log(newPrice);
          sumNewPrices += newPrice;


        });

        cy.get('#special > .container-fluid').find('.priceold') .each((oldElement) => {
        const oldPrice = parseFloat(oldElement.text().replace('$', ''));
        cy.log(oldPrice);

        sumOldPrices += oldPrice;
      });
      const alertMessage = `Hey, the sum of the old prices is $${sumOldPrices.toFixed(2)},
       and the sum of the new prices is $${sumNewPrices.toFixed(2)}.`;
      cy.log(alertMessage);

  });
});



