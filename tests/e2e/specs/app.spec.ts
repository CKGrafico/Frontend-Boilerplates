describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.debug();
    cy.visit('/');
  });
});
