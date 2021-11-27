import {InitialState} from "./initialState";
import {RegisterUserReducer} from "./reducers";
import * as types from './actions';

describe('Тестирование user reducer',()=>{
    it('Тестирование начального состояния редюсера',()=>{
        expect(RegisterUserReducer(InitialState,{})).toEqual(InitialState);
    });
    it('Тестирование LOGOUT_USER',()=>{
       expect(RegisterUserReducer(InitialState,{
           type:types.LOGOUT_USER
       })).toEqual({
           user: {},
           isAuth: false,
           errorMessage: "",
           resetPassword: false
       });
    });
    it('Тестирование NEW_PASSWORD_USER',()=>{
        expect(RegisterUserReducer({
            user: {},
            isAuth: false,
            errorMessage: "",
            resetPassword: true
        },{
            type:types.NEW_PASSWORD_USER,
        })).toEqual({
            user: {},
            isAuth: false,
            errorMessage: "",
            resetPassword: false
        });
    });
    it('Тестирование RESET_USER',()=>{
        expect(RegisterUserReducer(InitialState,{
            type:types.RESET_USER
        })).toEqual({
            user: {},
            isAuth: false,
            errorMessage: "",
            resetPassword: true
        });
    });
    it('Тестирование USER_CLOSE_ERROR',()=>{
        expect(RegisterUserReducer({
            user: {},
            isAuth: false,
            errorMessage: "test",
            resetPassword: true

        },{
            type: types.USER_CLOSE_ERROR
        })).toEqual({
            user: {},
            isAuth: false,
            errorMessage: "",
            resetPassword: true
        });
    });
    it('Тестирование USER_ERROR',()=>{
        expect(RegisterUserReducer(InitialState,{
            type:types.USER_ERROR,
            error:'Тест ошибки'
        })).toEqual({
            user: {},
            isAuth: false,
            errorMessage: "Тест ошибки",
            resetPassword: false
        });
    });
    it('Тестирование LOGIN_USER',()=>{
        expect(RegisterUserReducer(InitialState,{
            type:types.LOGIN_USER,
            data:{test:" Тестирование login "}
        })).toEqual({
            user: {test:" Тестирование login "},
            isAuth: true,
            errorMessage: "",
            resetPassword: false
        });
    });

    it('Тестирование ',()=>{
        expect(RegisterUserReducer(InitialState,{
            type:types.REGISTER_USER,
            data:{test:" Тестирование register "}
        })).toEqual({
            user: {test:" Тестирование register "},
            isAuth: false,
            errorMessage: "",
            resetPassword: false
        });
    });

});