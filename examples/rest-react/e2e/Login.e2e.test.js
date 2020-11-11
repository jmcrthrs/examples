describe('Login', () => {
  before(() => {
    cy.visit('/')
  })

  describe('given I logged in using existing user', () => {

    
    it.only('should display my user ID', () => {
      cy.get('[data-testid=button]').should('not.have.class', 'loading')
      cy.get('#username').type('johnUser{enter}')
      /* 
        at this point the form has been submitted and the 
        button should have a loading class and the loading text should be visible
      */
      cy.get('[data-testid=loading]').should('be.visible')

      /*
        For some reason Cypress does not find the button as the app has already
        rendered the logged in state, despite there being a 2 second delay on the login handler
      */
      cy.get('[data-testid=button]').should('have.class', 'loading')
      cy.get('[data-testid="userId"').should(
        'have.text',
        'f79e82e8-c34a-4dc7-a49e-9fadc0979fda'
        )
    })
  })
})
