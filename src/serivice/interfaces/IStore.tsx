
import {
    IAppReducer,
    IBurgerConstructorReducer,
    IRouter,
    IOrderDetailsReducer,
    IRegisterOrderReducer
} from "./IReducers";

interface IObjectKeys {
    [key: string]: IRouter | IAppReducer | IBurgerConstructorReducer | IOrderDetailsReducer | IRegisterOrderReducer;
}

export interface IStore extends IObjectKeys{
    router: IRouter,
    AppReducer: IAppReducer,
    BurgerConstructorReducer: IBurgerConstructorReducer,
    OrderDetailsReducer: IOrderDetailsReducer,
    RegisterUserReducer: IRegisterOrderReducer
}