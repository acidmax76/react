import {
    SUCCESS_LOAD_INGREDIENTS,
    LOADING_INGREDIENTS,
    FAILED_LOAD_INGREDIENTS,
    ADD_INGREDIENT_TO_CONSTRUCTOR,DELETE_INGREDIENT_FROM_CONSTRUCTOR, ADD_ORDER
} from "../../actions/app";

export function AppReducer(state, action) {
    switch (action.type) {
        case LOADING_INGREDIENTS:
            return {...state, loadingIngredient: true};
        case SUCCESS_LOAD_INGREDIENTS:
            return {...state, ingredients: action.ingredients, loadingIngredient: false, hasErrorLoadIngredient: false};
        case FAILED_LOAD_INGREDIENTS:
            return {...state, ingredients: [], loadingIngredient: false, hasErrorLoadIngredient: true};
        case ADD_ORDER:{
            return {
                ...state,
                orders:[
                    ...state.orders,
                    {
                        name: action.payload.name,
                        number: action.payload.order.number,
                        date: new Date().toLocaleString(),
                    }
                ],
            };
        }
        case DELETE_INGREDIENT_FROM_CONSTRUCTOR: {
            const index = action.payload;
            const newIngredients = [...state.constructor.ingredients];
            newIngredients.splice(index,1);
            return {
                ...state,
                constructor: {
                    ...state.constructor,
                    ingredients: newIngredients
                }
            };
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            const ingredient = action.payload;
            if (ingredient.type === 'bun') {
                return {
                    ...state,
                    constructor: {
                        ...state.constructor,
                        bun: ingredient,
                    }
                };
            }
            return {
                ...state,
                constructor: {
                    ...state.constructor,
                    ingredients: [
                        ...state.constructor.ingredients,
                        ingredient,
                    ]
                }
            }
        }
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}