const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9zfrut",
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
