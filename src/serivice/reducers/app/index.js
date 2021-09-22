import {SUCCESS_LOAD_INGREDIENTS,LOADING_INGREDIENTS,FAILED_LOAD_INGREDIENTS} from "../../actions/app";

export function reducer(state, action) {
    switch (action.type) {
        case LOADING_INGREDIENTS:
            return { ...state, loadingIngredient: true};
        case SUCCESS_LOAD_INGREDIENTS:
            return { ...state,  ingredients:action.payload, loadingIngredient: false, hasErrorLoadIngredient: false };
        case FAILED_LOAD_INGREDIENTS:
            return {...state, ingredients: [], loadingIngredient: false, hasErrorLoadIngredient: true}
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}