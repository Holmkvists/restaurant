describe("Tests for notFoundPage", () => {
  it("Test Home Button", () => {
    cy.visit("/abc")
      .get('[data-cy="homeButton"]')
      .click()
      .url()
      .should("equal", "http://localhost:3000/");
  });
});
