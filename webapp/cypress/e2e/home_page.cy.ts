import { SUGGESTIONS } from '../../src/constants'

const basePath = Cypress.env('REACT_APP_SERVER_APP')

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(`${basePath}`)
  })

  it('should appear suggestions', () => {
    cy.get('[data-test-id="suggestions"]').should('have.text', 'Suggestions:')

    SUGGESTIONS.map((name, index) => {
      cy.get(`[data-test-id="suggestion-item-${index}"]`).should(
        'have.text',
        name
      )
    })
  })

  it('should search suggestion selected', () => {
    cy.get('[data-test-id="suggestion-item-0"]').click()
    cy.get('[data-test-id="search-stock"]').should('have.value', SUGGESTIONS[0])
  })

  it('should search stock', () => {
    // Input stock name
    cy.get('[data-test-id="search-stock"]')
      .type('ABC')
      .should('have.value', 'ABC')

    // Titles appear normally
    cy.get('[data-test-id="current-price-title"]').should('be.visible')
    cy.get('[data-test-id="historical-price-title"]').should('be.visible')
    cy.get('[data-test-id="compare-to-title"]').should('be.visible')
    cy.get('[data-test-id="earning-forecasts-title"]').should('be.visible')
  })
})
