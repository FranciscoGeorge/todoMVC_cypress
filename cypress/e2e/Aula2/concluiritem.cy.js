import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Concluir itens na lista de toDo', () => {
  

    beforeEach (() => {
        cy.visit('/')

        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array ) {
            telaInicial.inputText(item)
        })
    })

    it('Concluir um item na lista de toDo', () => {
        telaInicial.concluirItem()

    })
    
    
  })