import buscaPage from '../pages/buscaPage'

describe('Realizando buscas', () => {

    it.only('Realizando algumas buscas e verificando que elas retornam o produto correto', () => {
        var termos = {
            terms1: 'notebook{enter}',
            terms2: 'geladeira{enter}',
            terms3: 'televisão{enter}',
        }

        buscaPage.acessando()
        buscaPage.buscandoNotebook(termos)
        buscaPage.resultadoNotebook()

        buscaPage.acessando()
        buscaPage.buscandoGeladeira(termos)
        buscaPage.resultadoGeladeira()

        buscaPage.acessando()
        buscaPage.buscandoTelevisão(termos)
        buscaPage.resultadoTelevisão()

    })

})