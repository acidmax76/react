export const LOADING_INGREDIENTS = 'LOADING_INGREDIENTS';
export const SUCCESS_LOAD_INGREDIENTS = 'SUCCESS_LOAD_INGREDIENTS';
export const FAILED_LOAD_INGREDIENTS = 'FAILED_LOAD_INGREDIENTS';
export const ADD_INGREDIENT_TO_CONSTRUCTOR = 'ADD_INGREDIENT_TO_CONSTRUCTOR';
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = 'DELETE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_ORDER='ADD_ORDER';
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredients() {
    return function (dispatch){
        dispatch({
            type:LOADING_INGREDIENTS,
        });
        fetch(API_URL).
        then(res=>{
            if (res.ok) {
                dispatch({
                    type:SUCCESS_LOAD_INGREDIENTS,
                    ingredients:res.data,
                });
            } else {
                dispatch({
                    type:FAILED_LOAD_INGREDIENTS,
                });
            }
        }).
        catch(error=>{
            dispatch({
                type:FAILED_LOAD_INGREDIENTS,
            });
        });
    }
}