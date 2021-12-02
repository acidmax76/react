import * as types from "./actions";
import {InitialState} from "./initialState";
import {BurgerConstructorReducer} from "./reducers";

describe('Тестирование burger-constructor reducer', () => {
    it('Редюсер должен вернуть начальное состояние', () => {
        expect(BurgerConstructorReducer(undefined, {})).toEqual(InitialState);
    });
    it('Удаление всех ингредиентов из конструктора', () => {
        expect(BurgerConstructorReducer({
            constructor: {
                bun: "Упрощенные данные булки",
                items: [{test:"тут упрощенные данные ингредиентов"},{test:"тут упрощенные данные ингредиентов 2"}]
            }
            }, {
            type: types.DELETE_ALL_FROM_CONSTRUCTOR
        })).toEqual({
            constructor: {
                bun: null,
                items: []
            }
        });
    });
    it('Удаление одного элемента из конструктора', () => {
        expect(BurgerConstructorReducer({
            constructor: {
                bun: "Упрощенные данные булки",
                items: [
                    {test:"тут упрощенные данные ингредиентов 0"},
                    {test:"тут упрощенные данные ингредиентов 1"},
                    {test:"тут упрощенные данные ингредиентов 2"}
                ]
            }
        },{
            type:types.DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload:1
        })).toEqual({
            constructor: {
                bun: "Упрощенные данные булки",
                items: [
                    {test:"тут упрощенные данные ингредиентов 0"},
                    {test:"тут упрощенные данные ингредиентов 2"}
                ]
            }
        });
    });
    it('Добавление булки в конструктор', () => {
        expect(BurgerConstructorReducer(undefined,{
            type:types.ADD_INGREDIENT_TO_CONSTRUCTOR,
            item:{
                type:"bun",
                test:"Упрощенные данные булки"
            }
        })).toEqual({
            constructor: {
                bun: {
                    type:"bun",
                    test:"Упрощенные данные булки"
                },
                items:[]
            }
        });
    });
    it('Добавление ингредиента кроме булки в конструктор', () => {
        expect(BurgerConstructorReducer(undefined,{
            type:types.ADD_INGREDIENT_TO_CONSTRUCTOR,
            item:{
                type:"sauce",
                test:"Упрощенные данные соуса"
            }
        })).toEqual({
            constructor: {
                bun: null,
                items:[{
                    type:"sauce",
                    test:"Упрощенные данные соуса"
                }]
            }
        });
    });

    it('Перемещение ингредиента в конструкторе', () => {
        expect(BurgerConstructorReducer({
            constructor: {
                bun: "Упрощенные данные булки",
                items: [
                    {test:"тут упрощенные данные ингредиентов 0"},
                    {test:"тут упрощенные данные ингредиентов 1"},
                    {test:"тут упрощенные данные ингредиентов 2"}
                ]
            }
        },{
            type:types.MOVE_CARD,
            item:{
                dragIndex:2,
                hoverIndex:0,
                dragCard:{test:"тут упрощенные данные ингредиентов 2"}
            }
        })).toEqual({
            constructor: {
                bun: "Упрощенные данные булки",
                items: [
                    {test:"тут упрощенные данные ингредиентов 2"},
                    {test:"тут упрощенные данные ингредиентов 0"},
                    {test:"тут упрощенные данные ингредиентов 1"}
                ]
            }
        });
    });

});