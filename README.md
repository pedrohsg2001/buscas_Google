



# Trabalho de conclusão de Curso | Sistema da informação 
#| Sistema de garantia de qualidade e Assertividade 
O sistema se trata de uma automação de buscas que funciona da seguinte forma,
o google é aberto e são feitas diversas buscas com palavras chaves, para cada
pesquisa realizada é verificado se o retorno da busca tem relação e coerência com
a palavra chave, caso tenha significa que o google está trazendo resultados
coerentes, e caso não tenha indica que aquela busca não foi bem sucedida,
gerando assim um indicador de erro para aquela palavra X.
Com a criação do sistema, o navegador google tem como objetivo trazer
resultados cada vez mais coerentes e atrativos para pesquisas dos seus usuários.

# Implementação: 

Para realizar este projeto, foi utilizado o "framework cypress". Na pasta "integration" está o teste automatizado, o qual possui o nome de "pesquisa_google", que consiste em realizar diversas pesquisas no google e garantir que os resultados que estão sendo retornados estão corretos.

Também foi criada a pasta "pages", que possui um arquivo chamado "buscaPage.js". Neste arquivo contém o passo a passo do que é executado durante a automação, o mesmo foi criado com a ideia do padrão "page objects", que tem como objetivo facilitar a manutenção e dar mais praticidade no desenvolvimento.


# Como rodar o projeto localmente na sua máquina:
- Abrir o terminal
- Acessar a pasta onde você deseja baixar o projeto
- Executar o comando: git clone https://github.com/pedrohsg2001/buscas_Google
- Acessar a pasta do projeto baixado
- Executar o comando: npx cypress open e selecionar o projeto que você deseja abrir.
