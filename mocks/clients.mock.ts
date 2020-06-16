export function mockClients(): void {
  cy.fixture('config').then((json) => {
    cy.route('GET', '/api/clients', json);
  });
}
