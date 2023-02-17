describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('should render button',()=>{
    cy.visit('http://localhost:3000')
    cy.get('h1').should('exist')
    cy.get('[data-testid==addBtn]').should('exist');
    cy.get('[data-testid==reduceBtn]').should('exist');

  })
})