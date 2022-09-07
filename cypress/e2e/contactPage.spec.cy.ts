describe("Tests for homePage", () => {
  beforeEach(() => {
    cy.visit("/kontakt");
  });

  it("Test Home Button", () => {
    cy.get('[data-cy="homeButton"')
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
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

  it("Contact Information Mobile", () => {
    cy.viewport(375, 667)
      .get('[data-cy="contactOne"]')
      .should("be.visible")
      .get('[data-cy="contactTwo"]')
      .should("not.be.visible")
      .get('[data-cy="contactThree"]')
      .should("not.be.visible");
  });

  it("Contact Information Non-Mobile", () => {
    cy.get('[data-cy="contactOne"]')
      .should("be.visible")
      .get('[data-cy="contactTwo"]')
      .should("be.visible")
      .get('[data-cy="contactThree"]')
      .should("be.visible");
  });
});
