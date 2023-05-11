describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#product').click()
    cy.get('#add-to-cart').click()
    cy.get('#cart-count').click()
  })

  it('should display the checkout form', () => {
    cy.get('#checkout-button').click()
    cy.get('#checkout-form').should('exist')
  })

  it('should submit the checkout form', () => {
    cy.get('#checkout-button').click()
    cy.get('#checkout-form input[name="name"]').type('John Doe')
    cy.get('#checkout-form input[name="address"]').type('123 Main St')
    cy.get('#checkout-form input[name="city"]').type('Anytown')
    cy.get('#checkout-form input[name="state"]').type('CA')
    cy.get('#checkout-form input[name="zip"]').type('12345')
    cy.get('#checkout-form input[name="card"]').type('1234567812345678')
    cy.get('#checkout-form input[name="expiration"]').type('12/23')
    cy.get('#checkout-form input[name="cvv"]').type('123')
    cy.get('#checkout-form input[name="submit"]').click()
    cy.get('#confirmation').should('exist')
  })
})
