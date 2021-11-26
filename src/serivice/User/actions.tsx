import {deleteCookie, getCookie, setCookie} from "../utils";
import {push} from "connected-react-router";
import {fetchWithRefresh} from "../utils";
import {IResponseBody} from "../interfaces/IResponseBody";
import {IUser} from "../interfaces/IUser";
import {IRequestOptions} from "../interfaces/IRequestOptions";
import {AppDispatch, AppThunk} from "../types";
import {Dispatch} from "redux";


const API_URL_REGISTER = 'https://norma.nomoreparties.space/api/auth/register';
const API_URL_LOGIN = 'https://norma.nomoreparties.space/api/auth/login';
const API_URL_LOGOUT = 'https://norma.nomoreparties.space/api/auth/logout';
const API_URL_USER = 'https://norma.nomoreparties.space/api/auth/user';
const API_URL_RESET = 'https://norma.nomoreparties.space/api/password-reset';
const API_URL_NEW_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset/reset';

export const REGISTER_USER: 'REGISTER_USER' = 'REGISTER_USER';
export const LOGIN_USER: 'LOGIN_USER' = 'LOGIN_USER';
export const USER_ERROR: 'USER_ERROR' = 'USER_ERROR';
export const USER_CLOSE_ERROR: 'USER_CLOSE_ERROR' = 'USER_CLOSE_ERROR';
export const RESET_USER: 'RESET_USER' = 'RESET_USER';
export const NEW_PASSWORD_USER: 'NEW_PASSWORD_USER' = 'NEW_PASSWORD_USER';
export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER';

export const name = 'RegisterUserReducer';

export const logoutUser: AppThunk = () => async (dispatch: Dispatch) => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
        dispatch({
            type: USER_ERROR,
            error: "Не найден refreshToken !"
        });
    } else {
        try {
            const requestOptions: IRequestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token: refreshToken})
            };
            await fetchWithRefresh(API_URL_LOGOUT, requestOptions);
            deleteCookie('accessToken');
            localStorage.removeItem('refreshToken');
            dispatch({
                type: LOGOUT_USER,
            });
            dispatch(push("/"));
        } catch (e: any) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}


export const changeUserInfo: AppThunk = (data: { name?: string, email?: string, password?: string }) => async (dispatch: AppDispatch) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) return;
    try {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', accessToken);
        const requestOptions: IRequestOptions = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        };

        const fetch: IResponseBody<IUser> = await fetchWithRefresh(API_URL_USER, requestOptions);
        if (fetch.user) {
            dispatch({
                type: LOGIN_USER,
                data: fetch.user,
            });
        }
    } catch (e: any) {
        dispatch({
            type: USER_ERROR,
            error: e.message
        });
    }
}


export const newPassword: AppThunk = (data: { password: string, token: string }) => async (dispatch: Dispatch) => {
    try {
        const requestOptions: IRequestOptions = {
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
    } catch (e: any) {
        dispatch({
            type: USER_ERROR,
            error: e.message
        });
    }
}


export const resetPassword: AppThunk = (data: { email: string }) => async (dispatch: Dispatch) => {
    try {
        const requestOptions: IRequestOptions = {
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
    } catch (e: any) {
        dispatch({
            type: USER_ERROR,
            error: e.message
        });
    }
}


export const getUser: AppThunk = () => async (dispatch: AppDispatch) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
        dispatch({
            type: USER_ERROR,
            error: "Не найден accessToken"
        });
    } else {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('authorization', accessToken);
        try {
            const requestOptions: IRequestOptions = {
                method: 'GET',
                headers: headers,
            };
            const fetch: IResponseBody<IUser> = await fetchWithRefresh(API_URL_USER, requestOptions);
            if (fetch.user) {
                dispatch({
                    type: LOGIN_USER,
                    data: fetch.user
                });
            }
        } catch (e: any) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }
}


export const loginUser: AppThunk = (data: { email: string, password: string }) => async (dispatch: AppDispatch) => {
    try {
        const requestOptions: IRequestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        const user: IResponseBody<IUser> = await fetchWithRefresh(API_URL_LOGIN, requestOptions);
        if (!user.accessToken || !user.refreshToken) {
            dispatch({
                type: USER_ERROR,
                error: "Нет accessToken или refreshToken"
            });
        } else {
            if (user.user) {
                localStorage.setItem("refreshToken", user.refreshToken);
                setCookie("accessToken", user.accessToken);
                dispatch({
                    type: LOGIN_USER,
                    data: user.user
                });
            }
        }
    } catch (e: any) {
        dispatch({
            type: USER_ERROR,
            error: e.message
        });
    }
}


export const registerUser:AppThunk = (data: { name: string, email: string, password: string }) => async (dispatch: Dispatch) => {
        try {
            const requestOptions: IRequestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };
            const user: IResponseBody<IUser> = await fetchWithRefresh(API_URL_REGISTER, requestOptions);
            if (user.user) {
                dispatch({
                    type: REGISTER_USER,
                    data: user.user
                });
                dispatch(push("/login"));
            }
        } catch (e: any) {
            dispatch({
                type: USER_ERROR,
                error: e.message
            });
        }
    }

