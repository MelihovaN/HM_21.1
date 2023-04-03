const users = require("../fixtures/user.json");
const generalElements = require("../fixtures/pages/general.json");
const boxPage = require("../fixtures/pages/boxPage.json");
import { faker } from "@faker-js/faker";

let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
let key;

describe("user can create a box", () => {
  it("user login", () => {
    cy.visit("/login");
    cy.login(users.userAutor.email, users.userAutor.password);
    cy.contains("Создать коробку").should("exist");
  });

  it("user logins and create a box", () => {
    cy.contains("Создать коробку").click();
    cy.get(boxPage.boxNameField).type(newBoxName);
    cy.get(boxPage.keyNameField)
      .invoke("val")
      .then((text) => {
        key = text;
      });
    cy.pressClick(boxPage.arrowRight);
    cy.creatBox();
  });

  it("delete the box API", () => {
    cy.request({
      method: "POST",
      url: "/api/login",
      body: {
        email: users.userAutor.email,
        password: users.userAutor.password,
      },
    });
    cy.request({
      method: "DELETE",
      url: "/api/box/" + key,
    });
  });
});
