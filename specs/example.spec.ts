import { mockClients } from '../mocks';

describe('Home page', () => {
  beforeEach(() => {
    cy.server();
    mockClients();
    cy.clock(Date.UTC(2018, 10, 10), ['Date']);
  });

  it('should be able to search for clients', () => {
    cy.visit('/');
    cy.get('[data-cy=name]').focus().type('Example');
    cy.get('[data-cy=error]').should('not.be.visible');
  });
});
