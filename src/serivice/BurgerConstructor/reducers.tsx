import {DELETE_INGREDIENT_FROM_CONSTRUCTOR,MOVE_CARD,DELETE_ALL_FROM_CONSTRUCTOR,ADD_INGREDIENT_TO_CONSTRUCTOR} from "./actions";
import {InitialState} from "./initialState";
import {IIngredient} from "../interfaces/IIngredient";

export const BurgerConstructorReducer = (state=InitialState, action:any) => {
    switch (action.type) {
        case MOVE_CARD:
            const {dragIndex,hoverIndex,dragCard} = action.item;
            const items: IIngredient[] = [...state.constructor.items];
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
            const newIngredients:IIngredient[] = [...state.constructor.items];
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
            const ingredient:IIngredient = action.item;
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