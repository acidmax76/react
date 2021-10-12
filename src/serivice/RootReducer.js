import { combineReducers } from 'redux';
import {AppReducer} from "./App/reducers";
import {BurgerConstructorReducer} from "./BurgerConstructor/reducers";
import {BurgerIngredientsReducer} from "./BurgerIngredients/reducers";
import {OrderDetailsReducer} from "./OrderDetails/reducers";
import {RegisterUserReducer} from "./User/reducers";
import{connectRouter} from "connected-react-router";

export const RootReducer = (history)=>combineReducers({
    router: connectRouter(history),
    AppReducer,
    BurgerConstructorReducer,
    BurgerIngredientsReducer,
    OrderDetailsReducer,
    RegisterUserReducer
});