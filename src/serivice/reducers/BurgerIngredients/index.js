import {InitialState} from "./initialState";
import {ADD_INGREDIENT_TO_MODAL} from "../../actions/app";

export const BurgerIngredientsReducer = (state=InitialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_TO_MODAL:
            return {
                ...state,modalIngredient: action.ingredient
            }
        // case LOADING_INGREDIENTS:
        //     return {...state, ingredients:{ ...state.ingredients,loadingIngredient: true, hasErrorLoadIngredient: false}};
        // case SUCCESS_LOAD_INGREDIENTS:
        //     return {...state, ingredients: {items:action.items, loadingIngredient: false, hasErrorLoadIngredient: false}};
        // case FAILED_LOAD_INGREDIENTS:
        //     return {...state, ingredients:{ items:[], loadingIngredient: false, hasErrorLoadIngredient: true}};
        // case ADD_ORDER:{
        //     return {
        //         ...state,
        //         orders:[
        //             ...state.orders,
        //             {
        //                 name: action.payload.name,
        //                 number: action.payload.order.number,
        //                 date: new Date().toLocaleString(),
        //             }
        //         ],
        //     };
        // }
        // case DELETE_INGREDIENT_FROM_CONSTRUCTOR: {
        //     const index = action.payload;
        //     const newIngredients = [...state.constructor.ingredients];
        //     newIngredients.splice(index,1);
        //     return {
        //         ...state,
        //         constructor: {
        //             ...state.constructor,
        //             ingredients: newIngredients
        //         }
        //     };
        // }
        // case ADD_INGREDIENT_TO_CONSTRUCTOR: {
        //     const ingredient = action.payload;
        //     if (ingredient.type === 'bun') {
        //         return {
        //             ...state,
        //             constructor: {
        //                 ...state.constructor,
        //                 bun: ingredient,
        //             }
        //         };
        //     }
        //     return {
        //         ...state,
        //         constructor: {
        //             ...state.constructor,
        //             ingredients: [
        //                 ...state.constructor.ingredients,
        //                 ingredient,
        //             ]
        //         }
        //     }
        // }
        default:
            return state;
    }
}