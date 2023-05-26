describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should change the running total as the numbers are pressed', () => {
    cy.get('#number1').click()
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('.display').should('contain', '123')
  })
  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '4')
  })
  it('should be able to chain operations together', () => {
    cy.get('#number3').click()
    cy.get('#operator_add').click()
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })
  it('should return positive numbers', () => {
    cy.get('#number3').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')

  })
  it('should return negative numbers', () => {
    cy.get('#number3').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-3')
  })
  it('should return decimal numbers', () => {
    cy.get('#number3').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1.5')
  })
  it('should return very large numbers', () => {
    cy.get('#number1').click()
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number7').click()
    cy.get('#number8').click()
    cy.get('#number9').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#number5').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '44253432')
  })
  it('should be able to handle exceptional circumstances', () => {
    cy.get('#number7').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })
})