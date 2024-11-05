describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('.po-button').should("have.attr", "disabled")


    cy.get('#input-name>po-field-container>div>div>input').type("André")
    cy.get('#input-address>po-field-container>div>div>input').type("Av. Raja")
    cy.get('#input-number>po-field-container>div>div>input').type("2000")

    cy.get('#input-website>po-field-container>div>div>input').type("www.google.com.br")
    cy.get('#input-email>po-field-container>div>div>input').type("andre@totvs.com.br")
    cy.get('.po-button').should("not.have.attr", "disabled")

    cy.get('.po-button').click();
    cy.get('.po-toaster-message').should("have.text", ' Data saved successfully! ')
    //cy.get('#input-name > po-field-container > .po-field-container > .po-field-container-content > .po-field-icon-container-right > .po-icon-input > po-icon > .ph').click()
    
    //cy.get('#input-name>po-field-container>div>div>input').should('have.value', "")
  
  })
})