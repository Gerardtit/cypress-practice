describe('template spec', () => {
  it('C1 Test 1', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    // Implicit assertion
    cy.get('#query-btn').should('contain', 'Button2')
    //explicit assertions
    expect(true).to.be.true
  })
})