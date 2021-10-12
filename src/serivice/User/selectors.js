import {createSelector} from "reselect";
import {name} from "./actions";

const user = (store) => store[name].user;
const auth = (store) => store[name].isAuth;
const error = (store) => store[name].errorMessage
const reset = (store) => store[name].resetPassword

export const getUser = createSelector(user, auth, error, reset, (user, isAuth, errorMessage, resetPassword) => ({
    user,
    isAuth,
    errorMessage,
    resetPassword
}));