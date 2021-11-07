import {InitialState} from "./initialState";
import {REGISTER_USER, LOGIN_USER, USER_ERROR, USER_CLOSE_ERROR,RESET_USER,NEW_PASSWORD_USER,LOGOUT_USER} from "./actions";

export const RegisterUserReducer = (state = InitialState, action:any) => {
    switch (action.type) {
        case LOGOUT_USER:
            return {
                user: {},
                isAuth: false,
                errorMessage: "",
                resetPassword: false
            }
        case NEW_PASSWORD_USER:
            return {
                ...state,
                resetPassword:false
            }
        case RESET_USER:
            return {
                ...state,
                resetPassword:true
            }
        case USER_CLOSE_ERROR:
            return {
                ...state,
                errorMessage: ""
            }
        case USER_ERROR:
            return {
                ...state,
                isAuth: false,
                errorMessage: action.error
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.data,
                isAuth: true,
                errorMessage: ""
            };
        case REGISTER_USER:
            return {
                ...state,
                user: action.data,
                isAuth: false,
                errorMessage: ""
            };
        default:
            return state;
    }
}