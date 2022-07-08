// beforeEach(() => {
//   cy.task("resetDb");
// });

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


// describe('Authenticate user', () => {
//   beforeEach(() => {
//     cy.log('runs before each test.')
//       })
//   it('allows users to sign up & log in', () => {
//     cy.visit('http://localhost:3000/signup')
//     cy.get('input[name="emailinput"]').type('testuser@123.com')
//     cy.get('input[name="passwordinput"]').type('Password123')
//     cy.get('button').click()
//     cy.visit('http://localhost:3000/login')
//     cy.get('input[name="email"]').type('testuser@123.com')
//     cy.get('input[name="password"]').type('Password123')
//     cy.get('#login-btn').click()
//     })
//     it('lets users redirect to home', () => {
//       cy.get('nav').contains('Home').click()
//       })
//   })

// (/signup)
// describe('Signup page', () => {
//   it('allows users to sign up and redirects to login page', () => {
//     cy.visit('http://localhost:3000/signup')
//     cy.get('p').should('contain', 'Signup')
//     cy.get('input[name="emailinput"]').type('testuser@123.com')
//     cy.get('input[name="passwordinput"]').type('Password123')
//     cy.get('button').click()
//     cy.visit('http://localhost:3000/login')
//     });
// })

// // // (/login)
// describe('Login page', () => {
//   it('allows users to log in submit input', () => {
//     cy.visit('http://localhost:3000/login')
//     cy.get('input[name="email"]').type('testuser@123.com')
//     cy.get('input[name="password"]').type('Password123')
//     cy.get('.login-btn').click()
//     })
//     it('lets users redirect to home', () => {
//     cy.get('nav').contains('Home').click()
//     });
//     it('allows social login', (button) => {
  //   cy.contains('Login with Google')
   // cy.contains('Login with Github')
  // })
// })

// (/landing page)
describe("Landing Page", () => {
  it("allows users to sign up & log in", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('input[name="emailinput"]').type("testuser@123.com");
    cy.get('input[name="passwordinput"]').type("Password123");
    cy.get("button").click();
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="email"]').type("testuser@123.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get(".login-btn").click();
  });
  it("lets users redirect to home", () => {
    cy.get("nav").contains("Home").click();
  });
  it("contains the weekly prompt", () => {
    cy.contains("Weekly Prompt")
    .get('#toggle-btn').click()
    .get("#prompt-div")
  });
  it("displays the image feed", () => {
    cy.get('ul')
  });
  it("allows toggling post visibility", () => {
    cy.get('#hide-btn').click()
  });
});

// after(() => {
// });

// (/signup)
// describe('Check signup button', () => {
//   beforeEach(() => {
//     cy.log('I run before every test in every spec file!!!!!!')
//   })

//   it('Gets, types and asserts', () => {
//     cy.visit('https://paintbox-app.vercel.app/signup')
//     cy.get('p').should('contain', 'Signup')
//     cy.get('button').click()
//     cy.visit('https://paintbox-app.vercel.app/login')
//     })
  
// })

// (/login)
// describe('User can login with email/password, Google and Github accounts',() => {
//   beforeEach(() => {
//     cy.log('I run before every test in every spec file!!!!!!')
//   })

//   it('login', (email, password) => {
//     cy.visit('http://localhost:3001/login')
    // cy.visit('https://paintbox-app.vercel.app/login')
    // cy.contains('Login').and('be.visible') 
    // cy.get('[type="text"]').type('me@email.com')
    // cy.get('[type="password"]').type('password')
    // cy.contains('Login').click()
    // cy.url().should('contain', 'Log Out')
    // cy.contains('Log Out')
    // })

  // it('login with social accounts', (button) => {
  //   cy.contains('Login with Google')
  // })

// })
