describe('Scroll', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the contact page', () => {
    cy.get('nav')
      .contains('Contact Us')
      .click();
    cy.url().should('include', '/contact-us');
  });

  it('should scroll to the bottom of the page and back to the top', () => {
    cy.scrollTo('bottom');
    cy.wait(1000); // wait for 1 second
    cy.scrollTo('top');
    cy.wait(1000);
  });

  it('should search for products and add them to cart', () => {
    cy.get('input[name="search"]').type('shoes');
    cy.get('button[type="submit"]').click();
    cy.get('.product')
      .first()
      .within(() => {
        cy.get('button').click();
      });
    cy.get('#cart').should('contain', '1 item');
  });

  it('should add a product to the wish list', () => {
    cy.get('.product')
      .first()
      .within(() => {
        cy.get('.add-to-wishlist').click();
      });
    cy.get('.wishlist-icon').click();
    cy.get('.wishlist-product').should('have.length', 1);
  });
});
