describe('template spec', () => {
  it('C1 Test 1', () => {
    cy.visit('https://example.cypress.io')
    cy.log(Cypress.env('runID'))
    cy.log('Biri2 birri')
  })
})