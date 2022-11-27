describe('Input onChange', () => {
  it('changes input value', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('input').type('Hakan');
    cy.get('input').should('have.value', 'Hakan');
    cy.get('#name').should('have.text', 'Name: Hakan');
  });
});
