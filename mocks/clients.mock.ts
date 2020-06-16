export function mockClients(): void {
  cy.fixture('clients').then((json) => {
    cy.route('GET', '/api/clients', json);
  });
}
