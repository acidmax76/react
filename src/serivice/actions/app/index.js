import {LOADING_INGREDIENTS,FAILED_LOAD_INGREDIENTS,SUCCESS_LOAD_INGREDIENTS} from "../../../components/App/App";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredients() {
    return async function (dispatch) {
        try {
            dispatch({
                type: LOADING_INGREDIENTS,
            });
            const res = await fetch(API_URL);
            if (!res.ok) {
                dispatch({
                    type: FAILED_LOAD_INGREDIENTS,
                });
                throw new Error('Ответ сети был не ok.');
            }
            const data = await res.json();
            if (data.success) {
                dispatch({
                    type: SUCCESS_LOAD_INGREDIENTS,
                    items: data.data,
                })
            } else {
                dispatch({
                    type: FAILED_LOAD_INGREDIENTS,
                })
                throw new Error('Данные не содержат success = true ');
            }
        } catch (e) {
            dispatch({
                type: FAILED_LOAD_INGREDIENTS,
            });
        }
    }
}