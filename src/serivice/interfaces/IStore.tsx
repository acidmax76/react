
import {
    IAppReducer,
    IBurgerConstructorReducer,
    IRouter,
    IOrderDetailsReducer,
    IRegisterOrderReducer
} from "./IReducers";
import {IWSState} from "../Websocket/interfaces";
import {IOrderSummaryReducer} from "../OrderSummary/interfaces";

interface IObjectKeys {
    [key: string]: IRouter | IAppReducer | IBurgerConstructorReducer | IOrderDetailsReducer | IRegisterOrderReducer | IWSState | IOrderSummaryReducer;
}

export interface IStore extends IObjectKeys{
    router: IRouter,
    AppReducer: IAppReducer,
    BurgerConstructorReducer: IBurgerConstructorReducer,
    OrderDetailsReducer: IOrderDetailsReducer,
    RegisterUserReducer: IRegisterOrderReducer
    OrdersReducer:IWSState,
    OrderSummaryReducer:IOrderSummaryReducer
}