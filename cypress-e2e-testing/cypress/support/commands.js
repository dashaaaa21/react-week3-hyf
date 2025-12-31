Cypress.Commands.add('selectCategory', (categoryId) => {
  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get(`[data-elementid="${categoryId}"]`).click();
  });
});

Cypress.Commands.add('checkCategorySelected', (categoryId, shouldBeSelected = true) => {
  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get(`[data-elementid="${categoryId}"]`)
      .should('have.attr', 'data-selected', shouldBeSelected.toString());
  });
});

Cypress.Commands.add('checkSelectedCount', (count) => {
  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-selected="true"]').should('have.length', count);
  });
});
