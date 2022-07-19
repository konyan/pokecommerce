describe('shared-test-lib: SharedTestLib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedtestlib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedTestLib!');
    });
});
