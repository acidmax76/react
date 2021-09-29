import { combineReducers } from 'redux';
import {AppReducer} from "./app";
import {BurgerConstructorReducer} from "./BurgerConctructor";
import {BurgerIngredientsReducer} from "./BurgerIngredients";
import {OrderDetailsReducer} from "./OrderDetails";

export const RootReducer = combineReducers({
    AppReducer,
    BurgerConstructorReducer,
    BurgerIngredientsReducer,
    OrderDetailsReducer
});