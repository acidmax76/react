import { combineReducers } from 'redux';
import {AppReducer} from "./App/reducers";
import {BurgerConstructorReducer} from "./BurgerConstructor/reducers";
import {BurgerIngredientsReducer} from "./BurgerIngredients/reducers";
import {OrderDetailsReducer} from "./OrderDetails/reducers";

export const RootReducer = combineReducers({
    AppReducer,
    BurgerConstructorReducer,
    BurgerIngredientsReducer,
    OrderDetailsReducer
});