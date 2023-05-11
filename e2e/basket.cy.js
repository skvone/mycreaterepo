describe('Login functionality', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('/');
    cy.get('#login-form').within(() => {
      cy.get('input[name="username"]').type('exampleuser');
      cy.get('input[name="password"]').type('examplepassword');
      cy.get('button[type="submit"]').click();
    });
    cy.url().should('include', '/dashboard');
    cy.get('nav').should('contain', 'Welcome, Example User');
  });

  it('Displays error message with invalid credentials', () => {
    cy.visit('/');
    cy.get('#login-form').within(() => {
      cy.get('input[name="username"]').type('invaliduser');
      cy.get('input[name="password"]').type('invalidpassword');
      cy.get('button[type="submit"]').click();
    });
    cy.get('.error-message').should('be.visible').and('contain', 'Invalid username or password');
  });
});
