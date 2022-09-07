describe("Tests for avbokningsbekraftelse", () => {
  beforeEach(() => {
    cy.visit("/avbokningsbekraftelse/abc");
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

  it("Image renders properly", () => {
    cy.get("img").should(([img]) => {
      expect(img.naturalWidth).greaterThan(0);
    });
  });
});
