
import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Acessar pagina todoMVC', () => {
  it('Abrir a pasta todoMVC', () => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/')

   telaInicial.inputText()

  })
})