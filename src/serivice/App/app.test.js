import {AppReducer} from "./reducers";
import {LOADING_INGREDIENTS, FAILED_LOAD_INGREDIENTS, SUCCESS_LOAD_INGREDIENTS} from "./actions";
import {InitialState} from "./initialState";

describe('Тестирование App reducer', () => {
    it('Должен вернуть начальное состояние', () => {
        expect(AppReducer(undefined, {})).toEqual(InitialState)
    });
    it('Загрузка ингредиентов',  ()=> {
        expect(AppReducer({ingredients:{
                loadingIngredient:false,
                hasErrorLoadIngredient:false,
                items:[{test:1}]
            }},{
            type:LOADING_INGREDIENTS
        })).toEqual({
            ingredients: {
                loadingIngredient: true,
                hasErrorLoadIngredient: false,
                items: [{test:1}]
            }
        });
    });
    it('Ошибка загрузки ингредиентов',()=>{
        expect(AppReducer({
            ingredients:{
                loadingIngredient:true,
                hasErrorLoadIngredient:false,
                items:[{test:1}]
            }
        },{
            type:FAILED_LOAD_INGREDIENTS
        })).toEqual({
            ingredients: {
                loadingIngredient: false,
                hasErrorLoadIngredient: true,
                items: []
            }
        })
    });
});