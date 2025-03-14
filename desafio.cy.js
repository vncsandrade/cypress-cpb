describe('Cadastro de Clube', () => {
  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos');
  });

  it('Deve registrar um clube com sucesso', () => {
  
  cy.contains('button', 'Concordo', { timeout: 5000 }).should('be.visible').click()

  cy.get('#cnpjClube').type('12165468000111')
  cy.get('#nomeCompletoClube').type('Clube Ficticio Teste')
  cy.get('#siglaClube').type('CFT')
  cy.get('#emailClube').type('clube@teste.com')
  cy.get('#dataFundacaoClube').type('12165468000111')
  cy.get('#siteClube').type('www.clubeteste.com')
  cy.get('#telefoneClube').type('1140028922')
  cy.get('#cepClube').type('06760458')
  cy.get('#enderecoClube').type('Rua do clube')
  cy.get('#numeroClube').type('1')
  cy.get('#complementoClube').type('Hangar 2')
  cy.get('#bairroClube').type('Jardim Clube')
  cy.get('#estadoClube .ng-select-container').click()
  cy.get('.ng-dropdown-panel .ng-option').contains('São Paulo').click()
  cy.get('#estadoClube .ng-select-container').click();
  cy.get('#cidadeClube > .ng-select-searchable > .ng-select-container').contains('ADAMANTINA').click()
  cy.get('#cpfPresidente').type('05148512374')
  cy.get('#nomePresidente').type('Presidente do clube')
  cy.get('#emailPresidente').type('presidente@clube.com')
  cy.get('#dataNascimentoDiretor').type('12165468000111')
  cy.get('#telefoneDiretor').type('12165468000111')
  cy.get('#celularDiretor').type('12165468000111')

  cy.get('#modalidade-4').click()
  cy.get('#modalidade-22').click()
  cy.get('#modalidade-19').click()
  cy.get('#modalidade-24').click()
  cy.get('#modalidade-27').click()

  cy.get('button.btn.btn-sm.btn-primary.ml-10').click();

  });
});
