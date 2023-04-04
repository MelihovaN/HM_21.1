const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "oha8vy",
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
