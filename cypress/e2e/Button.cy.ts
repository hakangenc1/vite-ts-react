describe('Button counter', () => {
  it('increases count', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('#counter').should('have.text', 0);
    cy.get('button').click();
    cy.get('#counter').should('have.text', 1);
  });
});
