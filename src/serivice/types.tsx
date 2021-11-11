import {TUser} from "./User/interfaces";
import {TOrder} from "./OrderDetails/interfaces";
import {TConstructor} from "./BurgerConstructor/interfaces";
import {TLoadIngredients} from "./App/interfaces";
import {store} from "./store";
import {Action, ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from "react-redux";

export type TApplicationActions =
        TUser |
        TOrder |
        TConstructor |
        TLoadIngredients;

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = Dispatch<TApplicationActions>

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();