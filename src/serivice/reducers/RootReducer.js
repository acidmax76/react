import { combineReducers } from 'redux';
import {AppReducer} from "./app";
import {BurgerConstructorReducer} from "./BurgerConctructor";
import {BurgerIngredientsReducer} from "./BurgerIngredients";

export const RootReducer = combineReducers({
    AppReducer,
    BurgerConstructorReducer,
    BurgerIngredientsReducer
});