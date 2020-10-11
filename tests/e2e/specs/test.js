// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should do arithmetical operations update the display the result', () => {
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








  })



})

