export const LOADING_INGREDIENTS = 'LOADING_INGREDIENTS';
export const SUCCESS_LOAD_INGREDIENTS = 'SUCCESS_LOAD_INGREDIENTS';
export const FAILED_LOAD_INGREDIENTS = 'FAILED_LOAD_INGREDIENTS';
export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const ADD_INGREDIENT_TO_MODAL = 'ADD_INGREDIENT_TO_MODAL';
export const DELETE_INGREDIENT_FROM_MODAL = 'DELETE_INGREDIENT_FROM_MODAL';
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = 'DELETE_INGREDIENT_FROM_CONSTRUCTOR';
export const DELETE_ALL_FROM_CONSTRUCTOR = 'DELETE_ALL_FROM_CONSTRUCTOR';
export const MOVE_CARD = 'MOVE_CARD';
export const ADD_ORDER = 'ADD_ORDER';
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