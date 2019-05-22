describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('/');
    
    // cy.get('.input').type('text').should('have.value', 'text');
    // cy.get('h1').should('contain', 'inner text')
  })
})
