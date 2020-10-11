// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should do arithmetical operations updating the display with the result', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15');
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5');
  })

    it('should give output with positive numbers', () => {
      cy.get('#number9').click();
      cy.get('#operator_subtract').click();
      cy.get('#number5').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain', '4');
    })

    it('should give output in negative when a small no. is subtracted  from a large no.', () => {
      cy.get('#number3').click();
      cy.get('#number3').click();
      cy.get('#operator_subtract').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain', '66');
    })

    it('should give output in decimals',() => {
      cy.get('#number2').click();
      cy.get('#number2').click();
      cy.get('#operator_divide').click();
      cy.get('#number7').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain', '3.142857142857143');
    })

    it('should be able to do arithmetic operation with large numbers',() => {
      cy.get('#number6').click();
      cy.get('#number2').click();
      cy.get('#number3').click();
      cy.get('#number2').click();
      cy.get('#number9').click();
      cy.get('#number7').click();
      cy.get('#number3').click();
      cy.get('#number3').click();
      cy.get('#number5').click();
      cy.get('#number1').click();
      cy.get('#operator_multiply').click();
      cy.get('#number9').click();
      cy.get('#number8').click();
      cy.get('#number7').click();
      cy.get('#number6').click();
      cy.get('#number5').click();
      cy.get('#number4').click();
      cy.get('#number3').click();
      cy.get('#number2').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain', '61560230627930000000');
    })

    //* In the calculator app, when a number is divided by 0, the output comes as 
    //* "INFINITY" which dose give a correct meaning to the end user.
    // * the output should be more user friendly
    it('should give an error message when divided by 0', () => {
      cy.get('#number6').click();
      cy.get('#operator_divide').click();
      cy.get('#number0').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain',"Error: can't divide by 0");
    })
})
