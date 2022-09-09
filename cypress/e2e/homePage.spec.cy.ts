describe("Tests for homePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test Menu Button", () => {
    cy.get('[data-cy="menuButton"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/meny");
  });

  it("Test Booking Button", () => {
    cy.get('[data-cy="bookingButton"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/boka-bord");
  });

  it("Test Contact Button", () => {
    cy.get('[data-cy="contactButton"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/kontakt");
  });
});
