import {deleteCookie, getCookie, setCookie} from "../utils";
import {push} from "connected-react-router";
import {fetchWithRefresh} from "../utils";

const API_URL_REGISTER = 'https://norma.nomoreparties.space/api/auth/register';
const API_URL_LOGIN = 'https://norma.nomoreparties.space/api/auth/login';
const API_URL_LOGOUT = 'https://norma.nomoreparties.space/api/auth/logout';
const API_URL_USER = 'https://norma.nomoreparties.space/api/auth/user';
const API_URL_RESET = 'https://norma.nomoreparties.space/api/password-reset';
const API_URL_NEW_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset/reset';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const USER_ERROR = 'USER_ERROR';
export const USER_CLOSE_ERROR = 'USER_CLOSE_ERROR';
export const RESET_USER = 'RESET_USER';
export const NEW_PASSWORD_USER = 'NEW_PASSWORD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const name = 'RegisterUserReducer';

export const logoutUser = () => {
    return async function (dispatch) {
        if (localStorage.getItem('refreshToken') !== null) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({token: localStorage.getItem('refreshToken')})
                };
                await fetchWithRefresh(API_URL_LOGOUT, requestOptions);
                deleteCookie('accessToken');
                localStorage.removeItem('refreshToken');
                dispatch({
                    type: LOGOUT_USER,
                });
                dispatch(push("/"));
            } catch (e) {
                dispatch({
                    type: USER_ERROR,
                    error: e.message
                });
            }
        }
    }
}

export const changeUserInfo = (data) => {
    return async function (dispatch) {
        if (getCookie('accessToken') !== undefined && localStorage.getItem('refreshToken') !== null) {
            try {
                const requestOptions = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getCookie('accessToken'),
                    },
                    body: JSON.stringify(data)
                };

                const fetch = await fetchWithRefresh(API_URL_USER, requestOptions);
                dispatch({
                    type: LOGIN_USER,
                    data: fetch.user,
                });
            } catch (e) {
                dispatch({
                    type: USER_ERROR,
                    error: e.message
                });
            }
        }
    }
}

export const newPassword = (data) => {
    return async function (dispatch) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            };
            await fetchWithRefresh(API_URL_NEW_PASSWORD, requestOptions);
            dispatch({
                type: NEW_PASSWORD_USER,
            });
            dispatch(push("/login"));
        } catch (e) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}

export const resetPassword = (data) => {
    return async function (dispatch) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            };
            await fetchWithRefresh(API_URL_RESET, requestOptions);
            dispatch({
                type: RESET_USER,
            });
            dispatch(push("/reset-password"));
        } catch (e) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}

export const getUser = () => {
    return async function (dispatch) {
        if (getCookie('accessToken') !== undefined && localStorage.getItem('refreshToken') !== null) {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': getCookie('accessToken')
                    },
                };
                const fetch = await fetchWithRefresh(API_URL_USER, requestOptions);
                dispatch({
                    type: LOGIN_USER,
                    data: fetch.user
                });
            } catch (e) {
                dispatch({
                    type: USER_ERROR,
                    error: e.message
                });
            }
        }
    }
}

export const loginUser = (data) => {
    return async function (dispatch) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };
            const user = await fetchWithRefresh(API_URL_LOGIN, requestOptions);
            localStorage.setItem("refreshToken", user.refreshToken);
            setCookie("accessToken", user.accessToken);
            dispatch({
                type: LOGIN_USER,
                data: user.user
            });
        } catch (e) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}

export function registerUser(data) {
    return async function (dispatch) {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };
            const user = await fetchWithRefresh(API_URL_REGISTER, requestOptions);
            dispatch({
                type: REGISTER_USER,
                data: user.user
            });
            dispatch(push("/login"));
        } catch (e) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}
