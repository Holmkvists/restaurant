describe("Tests for bookingPage", () => {
  beforeEach(() => {
    cy.visit("/boka-bord");
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

  it("Next-button disabled", () => {
    cy.get('[data-cy="nextButton"]').should("be.visible").should("be.disabled");
  });

  it("Test DateInput", () => {
    cy.get('[data-cy="dateInput"')
      .click()
      .type("2022-09-09")
      .should("have.value", "2022-09-09");
  });

  it("Test VisitorInput with letters", () => {
    cy.get('[data-cy="visitorInput"')
      .click()
      .type("abc")
      .should("have.value", "");
  });

  it("Test VisitorInput with numbers", () => {
    cy.get('[data-cy="visitorInput"').type("50").should("have.value", "50");
  });

  it("Test Time Checkboxes Default", () => {
    cy.get('[data-cy="dinner18"]')
      .should("have.value", "18")
      .should("not.be.checked");
    cy.get('[data-cy="dinner21"]')
      .should("have.value", "21")
      .should("not.be.checked");
  });

  it("Test Checking Checkboxes", () => {
    cy.get('[data-cy="dinner18"]').check().should("be.checked");
    cy.get('[data-cy="dinner21"]').check().should("be.checked");
  });
});
