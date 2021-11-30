describe('Проверяем всю цепочку заказа бургера', function () {
    before(() => {
        cy.visit('http://localhost:3000');
        cy.viewport('macbook-13');
    });
    beforeEach(() => {

            cy.intercept('GET', 'api/ingredients', {fixture: 'ingredients.json'});
            cy.intercept('POST', 'api/auth/login', {fixture: 'login.json'}).as('login');
            cy.intercept('POST', 'api/orders', {fixture: 'order.json'}).as('order');
        }
    );

    it('Проверяем что булок в конструкоре нет', () => {
        cy.get('[class^="BurgerConstructor_constructor__item"]>div').should('contain.text', 'Перетащите сюда булку');
    });

    it('Проверяем что начинки в конструкоре нет', () => {
        cy.get('[class^="BurgerConstructor_constructor__list"]>div').should('contain.text', 'Перетащите сюда начинку');
    });

    it('Перетаскиваем ингредиент булок', () => {
        cy.get('[data-tab-id="buns"]>div[class^="TabIngredients"]>a:nth-child(1)').as('bun');
        cy.get('[class^="BurgerConstructor_constructor__"').as('target');
        cy.get('@bun').drag('@target').then((success) => {
            assert.isTrue(success)
        });
    });

    it('Перетаскиваем ингредиент соусы', () => {
        cy.get('[data-tab-id="sauce"]>div[class^="TabIngredients"]>a:nth-child(1)').drag('[class^="BurgerConstructor_constructor__"').then((success) => {
            assert.isTrue(success)
        });
    });

    it('Проверяем, что булка есть в конструкторе', () => {
        cy.get('[class^="BurgerConstructor_constructor__item"]>div>span>span[class^=constructor-element__text]').contains('Булка 1(верх)').should('exist');
    });

    it('Проверяем, что ингредиенты есть в конструкторе', () => {
        cy.get('[class^="BurgerConstructor_constructor__list"]>li>div[class^="constructor-element"]>span>span[class^=constructor-element__text]').contains('Соус 1').should('exist');
    });

    it('Проверяем, что есть сумма заказа 2600', () => {
        cy.get('[class^="BurgerConstructor_constructor__price__"]>span').should('contain.text', '2600');
    });

    it('Нажимаем кнопку оформить заказ', () => {
        cy.get('[class^="BurgerConstructor_constructor__footer__"]>span>button').click();
    });

    it('Нас должно перкинуть на страницу логина', () => {
        cy.url().should('include', '/login');
    });

    it('Вводим верный логин и пароль', () => {
        cy.get('[class="input__icon input__icon-action"]').first().click();
        cy.get('input[type="email"]').type("test22@test.ru").should('have.value', 'test22@test.ru');
        cy.get('input[type="password"]').type('password').should('have.value', 'password');
        cy.get('button[class^="button_button__"]').first().should('contain.text', 'Войти').click();
    });

    it('Проверяем есть ли в запросе данные', () => {
        cy.wait('@login').its('request.body').should('deep.equal', {
            "email": "test22@test.ru",
            "password": "password"
        })
    })

    it('Нажимаем кнопку оформить заказ', () => {
        cy.get('[class^="BurgerConstructor_constructor__footer__"]>span>button').click();

    });

    it('Проверяем есть ли в запросе данные', () => {
        cy.wait('@order').its('request.body').should('deep.equal', {
            ingredients: ['3', '1', '1']
        })
    });

    it('Должно открыться модальное окно', () => {
        cy.get('#react-modals').as('modal');
        cy.get('[class^=Modal_wrapper__]').first().should('exist');
    });

    it('Должен появится номер заказа 111111', () => {
        cy.get('[class^="OrderDetails_digital__"').contains('111111').should('exist');
    });

    it('Закрытие модального окна', () => {
        cy.get('#react-modals').as('modal');
        cy.get('[class^="Modal_close__"]>svg').first().click();
        cy.get('@modal').should('not.contain.html');
        cy.url().should('include', 'http://localhost:3000');
    });
    it('Подождем секунду чтобы не мелькало',()=>{
        cy.wait(1000);
    });
    it('При клике на ингредиент должно открыться модальное окно', () => {
        cy.get('[class^=TabIngredients_ingredients__card__]').first().as('ingredient');
        cy.get('#react-modals').as('modal');
        cy.get('@ingredient').click();
        cy.get('[class^=Modal_wrapper__]').first().should('exist');
        cy.url().should('include', '/ingredients/');
    });

    it('Это модальное окно ингредиентов', () => {
        cy.get('[class^=Modal_title__]').contains('Детали ингредиента').should('exist');
    });

    it('В нем есть данные ингредиента Булка 1', () => {
        cy.get('[class^=ingredient_description__]').contains('Булка 1').should('exist');
    });

    it('Закрытие модального окна', () => {
        cy.get('#react-modals').as('modal');
        cy.get('[class^="Modal_close__"]>svg').first().click();
        cy.get('@modal').should('not.contain.html');
        cy.url().should('include', 'http://localhost:3000');
    });


});