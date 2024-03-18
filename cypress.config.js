const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://fabrykatestow.pl',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true
  },
});
