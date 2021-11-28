describe(' Запущен ли сайт', function() {
    it('Сайт должен быть доступен на localhost:3000', function() {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
        cy.url().should('include','http://localhost:3000/');
    });


});