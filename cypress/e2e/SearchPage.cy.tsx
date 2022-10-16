describe('The Search Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001')
    cy.get('[data-cy=username]').type('phdog')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/profile/phdog')
  })
})