// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

//(/)
// describe('Landing Page', () => {
//   it('redirects us to the landing page', () => {
//     // Start from the index page
//     cy.visit('http://localhost:3000/')

//   })
// })

// (/signup)
describe('Check signup button', () => {
  // beforeEach(() => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('p').should('contain', 'Signup')
    cy.get('button').click()
    cy.visit('http://localhost:3000/login')
    })
  // })
})

// (/login)
