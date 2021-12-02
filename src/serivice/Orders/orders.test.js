import {OrdersReducer, initialState} from "./reducers";
import * as types from '../Websocket/actions';

describe('Тестирование Orders reducer', () => {
    it('Тестирование начального состояния редюсера',()=>{
        expect(OrdersReducer(initialState,{})).toEqual(initialState);
    });
    it('Тестирование connection success',()=>{
        expect(OrdersReducer(initialState,{
            type:types.WS_CONNECTION_SUCCESS
        })).toEqual({
            error:undefined,
            wsConnected:true,
            data: {}
        });
    });
    it('Тестирование connection error',()=>{
        expect(OrdersReducer({
            wsConnected: true,
            data: {}
        },{
            type:types.WS_CONNECTION_ERROR,
            payload:"Тестирование ошибки содинения"
        })).toEqual({
            wsConnected: false,
            data: {},
            error:"Тестирование ошибки содинения"
        }
    );
    });
    it('Тестирование connection closed',()=>{
        expect(OrdersReducer({
            wsConnected: true,
            data: {},
            error:false
        },{
            type:types.WS_CONNECTION_CLOSED
        })).toEqual({
            data:{},
            error: undefined,
            wsConnected: false
        });
    });
    it('Тестирование get_message',()=>{
        expect(OrdersReducer(initialState,{
            type:types.WS_GET_MESSAGE,
            payload:'{"test":"Тестирование сообщения с вебсокета"}'
        })).toEqual({
            wsConnected: false,
            error:undefined,
            data:{test:"Тестирование сообщения с вебсокета"}
        });
    });

});