describe('template spec', () => {
  it('C1 Test 1', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain', 'Button2')
  })
})