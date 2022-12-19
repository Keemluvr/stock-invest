import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    REACT_APP_SERVER_APP: 'http://localhost:3000',
    REACT_APP_SERVER_API: 'http://localhost:3001'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
