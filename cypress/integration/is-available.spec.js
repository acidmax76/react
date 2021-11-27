describe(' Запущен ли сайт', function() {
    it('Сайт должен быть доступен на localhost:3000', function() {
        cy.visit('http://localhost:3000');
    });
});