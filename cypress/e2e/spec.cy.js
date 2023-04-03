const users = require("../fixtures/user.json");
const generalElements = require("../fixtures/pages/general.json");

describe("user can create a box", () => {
  it("user login", () => {
    cy.visit("/login");
    cy.login(users.userAutor.email, users.userAutor.password);
    cy.contains("Создать коробку").should("exist");
  });
});
