class BuscaPage{

    acessando() {
        //visitando o site
        cy.visit('https://www.google.com.br/')
        //clicando para garantir que o site carregou
        cy.get('img.lnXdpd').should('be.visible')
    }

    buscandoNotebook(termos) {
        //buscando por notebook
        cy.get('#APjFqb')
        .type(termos.terms1)   
    }
    buscandoGeladeira(termos) {
        //buscando por geladeira
        cy.get('#APjFqb')
        .type(termos.terms2)     
    }
    buscandoSmartTV(termos) {
        //buscando por smartTV
        cy.get('#APjFqb')
        .type(termos.terms3)     
    }

    buscandoSmartphone(termos){
        cy.get('#APjFqb')
        .type(termos.terms4)
    }

    resultadoNotebook() {
        cy.contains('Notebook').should('be.visible')
    }

    resultadoGeladeira() {
        cy.contains('Geladeira').should('be.visible')
    }

    resultadoSmartTV() {
        cy.contains('Smart TV').should('be.visible')
    }

    resultadoSmartphone() {
        cy.contains('Smartphone').should('be.visible')
    }

}

export default new BuscaPage;