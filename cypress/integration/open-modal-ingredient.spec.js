describe(
    'Проверка открытия модального окна с данными ингредиента', () => {
        before(() => {
            cy.viewport('macbook-13');
            cy.visit('http://localhost:3000');
        });
        it('Должно открыться модальное окно', () => {
            cy.get('[class^=TabIngredients_ingredients__card__]').first().as('ingredient');
            cy.get('#react-modals').as('modal');
            cy.get('@ingredient').click();
            cy.get('[class^=Modal_wrapper__]').first().should('exist');
        });
        it('Это модальное окно ингредиентов', () => {
            cy.get('[class^=Modal_title__]').first().should('contain.text', 'Детали ингредиента');
        });
        it('В нем есть данные ингредиента', () => {
            cy.get('[class^=ingredient_image__]').first().should('exist');
            cy.get('[class^=ingredient_description__]').first().should('exist');
            cy.get('[class^=ingredient_digits__]').first().should('exist');
        });
        it('Закртыие модального окна', () => {
            cy.get('#react-modals').as('modal');
            cy.get('[class^=Modal_close__] svg').first().click();
            cy.get('@modal').should('not.contain.html');

        });

    }
);