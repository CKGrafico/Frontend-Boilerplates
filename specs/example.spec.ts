import { mockArticleList, mockBranchList, mockClientArticleDiscounts, mockClientList, mockConfig } from '../mocks';

// We test only one page because are all the same
describe('Dynamic page', () => {
  beforeEach(() => {
    cy.server();
    mockConfig();
    mockClientList();
    mockClientArticleDiscounts();
    mockArticleList();
    mockBranchList();
    cy.clock(Date.UTC(2018, 10, 10), ['Date']);
  });

  it('should be able to search for clients', () => {
    cy.visit('/client-article-discount');
    cy.get('[data-cy=select] input').focus().type('Example').wait(2000).type('{enter}');
  });

  it('should be able to create a new article if fill out the form', () => {
    cy.get('[data-cy=add]')
      .click()
      .wait(1000)
      .then(() => {
        cy.get('[data-cy=fake-row-1] input').focus().type('Example').wait(500).type('{enter}');

        cy.get('[data-cy=fake-row-3] input').focus().type('10').type('{enter}');

        cy.get('[data-cy=fake-row-6] input').focus().type('Example').wait(500).type('{enter}');

        cy.get('[data-cy=fake-row-4] input').click().get(`.react-datepicker__day--011`).click();

        cy.get('[data-cy=fake-row-5] input').click().get(`.react-datepicker__day--015`).click();

        cy.get('[data-cy=save]').click();

        cy.get('[data-cy=notify-success]').should('be.visible');
        cy.get('[data-cy=notify-error]').should('not.be.visible');
      });
  });

  it('should not be able to remove active discounts', () => {
    cy.get('[data-cy=edit]')
      .last()
      .click()
      .wait(1000)
      .then(() => {
        cy.get('[data-cy=remove]').should('not.be.visible');
        cy.get('[data-cy=close]').click();
      });
  });

  it('should not be able to create if required fields are not filled', () => {
    cy.get('[data-cy=add]')
      .click()
      .wait(1000)
      .then(() => {
        cy.get('[data-cy=save]').click();

        cy.get('[data-cy=fake-row-1] .has-error').should('be.visible');
        cy.get('[data-cy=fake-row-2] .has-error').should('not.be.visible');
        cy.get('[data-cy=fake-row-3] .has-error').should('be.visible');
        cy.get('[data-cy=fake-row-4] .has-error').should('be.visible');
        cy.get('[data-cy=fake-row-5] .has-error').should('not.be.visible');
        cy.get('[data-cy=fake-row-6] .has-error').should('not.be.visible');
        cy.get('[data-cy=close]').click();
      });
  });

  it('should be able to remove future discounts', () => {
    cy.get('[data-cy=edit]')
      .first()
      .click()
      .wait(1000)
      .then(() => {
        cy.get('[data-cy=remove]').click();
        cy.get('[data-cy=confirm').click();
        cy.get('[data-cy=notify-success]').should('be.visible');
        cy.get('[data-cy=notify-error]').should('not.be.visible');
      });
  });
});
