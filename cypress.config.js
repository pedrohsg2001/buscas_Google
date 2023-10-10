const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '5ch1ea',
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.google.com.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
