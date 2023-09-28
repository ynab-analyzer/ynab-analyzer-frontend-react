/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the main navigation', () => {
    cy.get('nav').should('exist');
  });
});
