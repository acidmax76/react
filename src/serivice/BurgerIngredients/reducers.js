import {InitialState} from "./initialState";
import {ADD_INGREDIENT_TO_MODAL,DELETE_INGREDIENT_FROM_MODAL} from "./actions";

export const BurgerIngredientsReducer = (state=InitialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_TO_MODAL:
            return {
                ...state,modalIngredient: action.ingredient
            }
        case DELETE_INGREDIENT_FROM_MODAL :
            return {
                ...state,modalIngredient:{}
            }
        default:
            return state;
    }
}