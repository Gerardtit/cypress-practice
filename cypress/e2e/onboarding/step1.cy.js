describe('template spec', () => {
  it('C1 Test 1', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    // Implicit assertion
    cy.get('#query-btn').should('contain', 'Button2')
    //explicit assertions
    expect(true).to.be.true
  })  
  it('C37 Test 3', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    // Implicit assertion
    cy.get('#query-btn').should('contain', 'Button')
    //explicit assertions
    expect(true).to.be.true
  })
})