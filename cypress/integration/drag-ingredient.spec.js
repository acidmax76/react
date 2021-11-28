describe('Перетаскивание ингредиента',()=>{
    before(()=> {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
    });

    it('Проверяем что булок в конструкоре нет',()=>{
        cy.get('[class^="BurgerConstructor_constructor__item"]>div').should('contain.text','Перетащите сюда булку');
    });

    it('Проверяем что начинки в конструкоре нет',()=>{
        cy.get('[class^="BurgerConstructor_constructor__list"]>div').should('contain.text','Перетащите сюда начинку');
    });


    it('Перетаскиваем ингредиент булок',()=>{
        cy.get('[data-tab-id="buns"]>div[class^="TabIngredients"]>a:nth-child(2)').drag('[class^="BurgerConstructor_constructor__"').then((success) => {
            assert.isTrue(success)
        });
    });

    it('Перетаскиваем ингредиент соусы',()=>{
        cy.get('[data-tab-id="sauce"]>div[class^="TabIngredients"]>a:nth-child(2)').drag('[class^="BurgerConstructor_constructor__"').then((success) => {
            assert.isTrue(success)
        });
    });

    it('Проверяем, что булка есть в конструкторе',()=>{
        cy.get('[class^="BurgerConstructor_constructor__item"]>div>span').should('not.be.empty');
    });

    it('Проверяем, что ингредиенты есть в конструкторе',()=>{
        cy.get('[class^="BurgerConstructor_constructor__list"]>li>div[class^="constructor-element"]>span').should('not.be.empty');
    });

});