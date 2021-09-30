import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    DELETE_INGREDIENT_FROM_CONSTRUCTOR,
   DELETE_ALL_FROM_CONSTRUCTOR,
    MOVE_CARD
} from "../../actions/app";

import {InitialState} from "./initialState";

export const BurgerConstructorReducer = (state=InitialState, action) => {
    switch (action.type) {
        case MOVE_CARD:
            const {dragIndex,hoverIndex,dragCard} = action.item;
            const items = [...state.constructor.items];
            items.splice(dragIndex, 1);
            items.splice(hoverIndex, 0, dragCard);
            return {
                ...state,
                constructor: {
                    ...state.constructor,
                    items: items
                }
            }
        case DELETE_ALL_FROM_CONSTRUCTOR:
            return {
                ...state,
                constructor: {
                    bun:null,
                    items:[]
                }
            };
        case DELETE_INGREDIENT_FROM_CONSTRUCTOR: {
            const index = action.payload;
            const newIngredients = [...state.constructor.items];
            newIngredients.splice(index,1);
            return {
                ...state,
                constructor: {
                    ...state.constructor,
                    items: newIngredients
                }
            };
        }
        case ADD_INGREDIENT_TO_CONSTRUCTOR: {
            const ingredient = action.item;
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
                    items: [
                        ...state.constructor.items,
                        ingredient,
                    ]
                }
            }
        }
        default:
            return state;
    }
}