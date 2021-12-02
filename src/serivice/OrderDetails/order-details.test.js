import {InitialState} from "./initialState";
import * as types from './actions';
import {OrderDetailsReducer} from "./reducers";

describe('Тестирование order-details reducer',()=>{
    it('Тестирование начального состояния редюсера',()=>{
        expect(OrderDetailsReducer(undefined,{})).toEqual(InitialState);
    });
    it('Тестирование запроса заказа',()=>{
        expect(OrderDetailsReducer(InitialState,{
            type:types.ORDER_REQUEST
        })).toEqual(InitialState);
    });
    it('Тестирование ошибки получения заказа',()=>{
        expect(OrderDetailsReducer(InitialState,{
            type:types.ORDER_ERROR
        })).toEqual(InitialState);
    });
    it('Тестирование успешного получения заказа',()=>{
        expect(OrderDetailsReducer(InitialState,{
            type:types.ORDER_SUCCESS,
            data:{name:"номер заказа",number:99}
        })).toEqual({
            order:{
                name:"номер заказа",
                number:99
            }
        });
    });
    it('Тестирование успешного получения заказа, но не пришли нужные данные',()=>{
        expect(OrderDetailsReducer(InitialState,{
            type:types.ORDER_SUCCESS,
            data:undefined
        })).toEqual(InitialState);
    });

});

