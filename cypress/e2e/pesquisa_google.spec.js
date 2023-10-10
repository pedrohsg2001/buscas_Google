import buscaPage from '../pages/buscaPage'

describe('Realizando buscas', () => {

    it.only('Realizando algumas buscas e verificando que elas retornam o produto correto', () => {
        var termos = {
            terms1: 'notebook{enter}',
            terms2: 'geladeira{enter}',
            terms3: 'smart TV{enter}',
            terms4: 'smartphone{enter}',
        }

        buscaPage.acessando()
        buscaPage.buscandoNotebook(termos)
        cy.wait(5000)
        buscaPage.resultadoNotebook()

        buscaPage.acessando()
        buscaPage.buscandoGeladeira(termos)
        cy.wait(5000)
        buscaPage.resultadoGeladeira()

        buscaPage.acessando()
        buscaPage.buscandoSmartTV(termos)
        cy.wait(5000)
        buscaPage.resultadoSmartTV()

        buscaPage.acessando()
        buscaPage.buscandoSmartphone(termos)
        cy.wait(5000)
        buscaPage.resultadoSmartphone()

    })

})