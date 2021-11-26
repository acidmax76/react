import { combineReducers } from 'redux';
import {AppReducer} from "./App/reducers";
import {BurgerConstructorReducer} from "./BurgerConstructor/reducers";
import {OrderDetailsReducer} from "./OrderDetails/reducers";
import {RegisterUserReducer} from "./User/reducers";
import{connectRouter} from "connected-react-router";
import { History } from 'history';
import {OrdersReducer} from "./Orders/reducers";
import {OrderSummaryReducer} from "./OrderSummary/reducers";

export const RootReducer = (history: History<unknown>)=>combineReducers({
    router: connectRouter(history),
    AppReducer,
    BurgerConstructorReducer,
    OrderDetailsReducer,
    RegisterUserReducer,
    OrdersReducer,
    OrderSummaryReducer
//    PrivateOrdersReducer
});