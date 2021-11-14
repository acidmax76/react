import {TUser} from "./User/interfaces";
import {TOrder} from "./OrderDetails/interfaces";
import {TConstructor} from "./BurgerConstructor/interfaces";
import {TLoadIngredients} from "./App/interfaces";
import {store} from "./store";
import {Action, ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {
    useDispatch as dispatchHook,
} from "react-redux";
import {TWebsocket} from "./Websocket/interfaces";
import {TOrderSummary} from "./OrderSummary/interfaces";

export type TApplicationActions =
        TUser |
        TOrder |
        TConstructor |
        TLoadIngredients |
        TWebsocket |
        TOrderSummary;

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = Dispatch<TApplicationActions>

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();