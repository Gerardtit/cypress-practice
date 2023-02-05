const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    specPattern: [
      "**/*.cy.js"
    ]
  },
  reporter: 'autoset-status-cypress-testrail-reporter',
  reporterOptions: {
    host: 'https://spifftest.testrail.io',
    username: 'gperalta83.gp+1@gmail.com',
    password: "Spifftest1!",
    projectId: 1,
    runId:1
  }
});

