describe('Логин',()=>{
    before(()=> {
        cy.viewport('macbook-13');
        cy.clearCookie('accessToken');
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