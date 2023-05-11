describe('Contact form functionality', () => {
  it('Submits contact form with valid inputs', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('textarea[name="message"]').type('Hello, this is a test message.');
    cy.get('button[type="submit"]').click();
    cy.get('.success-message').should('be.visible').and('contain', 'Your message has been sent!');
  });

  it('Displays error messages with invalid inputs', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('J');
    cy.get('input[name="email"]').type('invalidemail');
    cy.get('textarea[name="message"]').type('Hi');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible').and('contain', 'Please enter a valid name.');
    cy.get('.error-message').should('be.visible').and('contain', 'Please enter a valid email address.');
    cy.get('.error-message').should('be.visible').and('contain', 'Please enter a message with at least 10 characters.');
  });
});
