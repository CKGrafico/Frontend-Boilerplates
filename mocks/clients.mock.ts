export function mockConfig(): void {
  cy.fixture('config').then((json) => {
    cy.route('GET', '/api/config', json);
  });
}
