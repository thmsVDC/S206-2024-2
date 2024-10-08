/// <reference = cypress>

describe("Testes da criação, registro e login", () => {
  it("Teste criação de usuário com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")

    cy.get('.btn-link').click()
    cy.get('#firstName').type("Thomas")
    cy.get('#Text1').type("Victor")
    cy.get('#username').type("thms")
    cy.get('#password').type("senha")
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it("Teste criação de usuário com falha", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Thomas")
    cy.get('#Text1').type("Victor")
    cy.get('#username').type("thms")
    cy.get('.btn-primary').should("be.disabled")
  })

  it("Teste de login com sucesso", () => {
    let infos = criarUser()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")

    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('h1.ng-binding').should("contain.text", infos[0])
  })

  it("Teste login com falha após delete", () => {
    let infos = criarUser()
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")

    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('h1.ng-binding').should("contain.text", infos[0])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()

    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should("have.text", "Username or password is incorrect")
  })
})

function criarUser() {
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let id = hora + minuto + seg + "ID"
  let senha = hora + minuto + seg + "SENHA"
  let infos = [id, senha]

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")

  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()

  cy.get('.ng-binding').should("contain.text", "Registration successful")

  return infos
}