import {LOADING_INGREDIENTS,SUCCESS_LOAD_INGREDIENTS,FAILED_LOAD_INGREDIENTS} from "./actions";
import {InitialState} from "./initialState";
import {TLoadIngredients} from "./interfaces";
import {IAppReducer} from "../interfaces/IReducers";

export const AppReducer = (state=InitialState, action:TLoadIngredients):IAppReducer => {

    switch (action.type) {
        case LOADING_INGREDIENTS:
            return {...state, ingredients:{ ...state.ingredients,loadingIngredient: true, hasErrorLoadIngredient: false}};
        case SUCCESS_LOAD_INGREDIENTS:
            return {...state, ingredients: {items:action.items, loadingIngredient: false, hasErrorLoadIngredient: false}};
        case FAILED_LOAD_INGREDIENTS:
            return {...state, ingredients:{ items:[], loadingIngredient: false, hasErrorLoadIngredient: true}};
        default:
            return state;

    }
}