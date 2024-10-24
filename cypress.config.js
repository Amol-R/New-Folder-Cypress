const { defineConfig } = require("cypress");
const setupNodeEvents = require('cypress-image-diff-js/dist/plugin')
module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  projectId: "szn6wr",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    // require('./commands')
  // excludeSpecPattern:['**/1-getting-started/*,**/2-advanced-examples/*']

  },
 
});
