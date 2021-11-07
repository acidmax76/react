import {fetchWithRefresh} from "../utils";
import {Dispatch} from "redux";
import {IResponseBody} from "../interfaces/IResponseBody";
import {IIngredient} from "../interfaces/IIngredient";
import {IRequestOptions} from "../interfaces/IRequestOptions";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const LOADING_INGREDIENTS = 'LOADING_INGREDIENTS';
export const SUCCESS_LOAD_INGREDIENTS = 'SUCCESS_LOAD_INGREDIENTS';
export const FAILED_LOAD_INGREDIENTS = 'FAILED_LOAD_INGREDIENTS';
export const name = 'AppReducer';

export function getIngredients() {
    return async function (dispatch:Dispatch) {
        try {
            dispatch({
                type: LOADING_INGREDIENTS,
            });
            const requestOptions:IRequestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const data:IResponseBody<IIngredient[]> = await fetchWithRefresh(API_URL, requestOptions);
            dispatch({
                type: SUCCESS_LOAD_INGREDIENTS,
                items: data.data,
            })
        } catch (e) {
            dispatch({
                type: FAILED_LOAD_INGREDIENTS,
            });
        }
    }
}