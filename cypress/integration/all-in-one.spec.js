describe('Проверяем всю цепочку заказа бургера', function() {
    before(()=> {
        cy.viewport('macbook-13');
        cy.clearCookie('accessToken');
    });
    it('Сайт должен быть доступен на localhost:3000', function() {
        cy.visit('http://localhost:3000');
        cy.url().should('include','http://localhost:3000/');
    });
    it('Должно открыться модальное окно', () => {
        cy.get('[class^=TabIngredients_ingredients__card__]').first().as('ingredient');
        cy.get('#react-modals').as('modal');
        cy.get('@ingredient').click();
        cy.get('[class^=Modal_wrapper__]').first().should('exist');
        cy.url().should('include','/ingredients/');
    });
    it('Это модальное окно ингредиентов', () => {
        cy.get('[class^=Modal_title__]').first().should('contain.text', 'Детали ингредиента');
    });
    it('В нем есть данные ингредиента', () => {
        cy.get('[class^=ingredient_image__]').first().should('exist');
        cy.get('[class^=ingredient_description__]').first().should('exist');
        cy.get('[class^=ingredient_digits__]').first().should('exist');
    });
    it('Закрытие модального окна', () => {
        cy.get('#react-modals').as('modal');
        cy.get('[class^="Modal_close__"]>svg').first().click();
        cy.get('@modal').should('not.contain.html');
        cy.url().should('include','http://localhost:3000');
    });
    it('Переходим на страницу логина',()=>{
        cy.visit('http://localhost:3000/login');
        cy.url().should('include', '/login');
    });
    it('Вводим верный логин и пароль',()=>{
        cy.get('[class="input__icon input__icon-action"]').first().click();
        cy.get('input[type="email"]').type("acidmax76@icloud.com").should('have.value', 'acidmax76@icloud.com');
        cy.get('input[type="password"]').type('vfrc1111').should('have.value', 'vfrc1111');
        cy.get('button[class^="button_button__"]').first().should('contain.text', 'Войти').click();
    });
    it('Проверяем после успешного логина должны перейти на главную',()=>{
        cy.url().should('include','http://localhost:3000/');
    })



});