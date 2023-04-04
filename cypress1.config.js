const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9zfrut",
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
