class BuscaPage{

    acessando() {
        //visitando o site
        cy.visit('https://www.google.com.br/')
        //clicando para garantir que o site carregou
        cy.get('img.lnXdpd').should('be.visible')
    }

    buscandoNotebook(termos) {
        //buscando por notebook
        cy.get('input[name="q"]')
        .type(termos.terms1)     
    }
    buscandoGeladeira(termos) {
        //buscando por geladeira
        cy.get('input[name="q"]')
        .type(termos.terms2)     
    }
    buscandoTelevisão(termos) {
        //buscando por geladeira
        cy.get('input[name="q"]')
        .type(termos.terms3)     
    }

    resultadoNotebook() {
        cy.contains('Notebook').should('be.visible')
    }

    resultadoGeladeira() {
        cy.contains('Geladeira').should('be.visible')
    }

    resultadoTelevisão() {
        cy.contains('Televisão').should('be.visible')
    }

}

export default new BuscaPage;