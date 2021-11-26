import {fetchWithRefresh} from "../utils";
import {IResponseBody} from "../interfaces/IResponseBody";
import {IIngredient} from "../interfaces/IIngredient";
import {IRequestOptions} from "../interfaces/IRequestOptions";
import {AppDispatch, AppThunk} from "../types";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const LOADING_INGREDIENTS: 'LOADING_INGREDIENTS' = 'LOADING_INGREDIENTS';
export const SUCCESS_LOAD_INGREDIENTS: 'SUCCESS_LOAD_INGREDIENTS' = 'SUCCESS_LOAD_INGREDIENTS';
export const FAILED_LOAD_INGREDIENTS: 'FAILED_LOAD_INGREDIENTS' = 'FAILED_LOAD_INGREDIENTS';
export const name = 'AppReducer';

export const getIngredients:AppThunk = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({
            type: LOADING_INGREDIENTS,
        });
        const requestOptions: IRequestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const data: IResponseBody<IIngredient[]> = await fetchWithRefresh(API_URL, requestOptions);
        if (data.data) {
            dispatch({
                type: SUCCESS_LOAD_INGREDIENTS,
                items: data.data,
            })
        }
    } catch (e) {
        dispatch({
            type: FAILED_LOAD_INGREDIENTS,
        });
    }
}
