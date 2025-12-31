const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hyf-react-w2-example.netlify.app',
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,spec.js}',
    setupNodeEvents(on, config) {
    },
  },
})
