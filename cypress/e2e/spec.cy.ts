describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#po-input\[9ebd878e-360e-a851-9619-51ac1726c965\]').click().type("teste")
  })
})