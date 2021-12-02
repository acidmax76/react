import * as types from './actions';
import {OrderSummaryReducer} from "./reducers";
import {initialState} from "./initialState";

describe('Тестирование order-summary reducer',()=>{
    it('Тестирование начального состояния редюсера',()=>{
        expect(OrderSummaryReducer(initialState,{})).toEqual(initialState);
    });
    it('Тестирование ORDER_SUMMARY_REQUEST',()=>{
        expect(OrderSummaryReducer(initialState,{
            type:types.ORDER_SUMMARY_REQUEST
        })).toEqual(initialState);
    });
    it('Тестирование ORDER_SUMMARY_ERROR',()=>{
        expect(OrderSummaryReducer(initialState,{
            type:types.ORDER_SUMMARY_ERROR
        })).toEqual({
            orders:{},hasError:true
        });
    });
    it('Тестирование ORDER_SUMMARY_SUCCESS',()=>{
        expect(OrderSummaryReducer(initialState,{
            type:types.ORDER_SUMMARY_SUCCESS,
            data:{test:"Тестирование  успешного статуса "}
        })).toEqual({
            hasError:false,
            orders:{test:"Тестирование  успешного статуса "}
        });
    });

});