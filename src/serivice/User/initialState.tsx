import {IRegisterOrderReducer} from "../interfaces/IReducers";

export const InitialState:IRegisterOrderReducer = {
    user: {},
    isAuth: false,
    errorMessage: "",
    resetPassword: false
};