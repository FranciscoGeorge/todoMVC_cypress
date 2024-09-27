import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Adicionar itens na minha lista de toDo', () => {
  

    beforeEach (() => {
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Francisco")
       
      })

    it('Adicionar mais de um item a lista', () => {
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array ) {
            telaInicial.inputText(item)
        })
    })
    
    
  })