import {Location} from "history";
import {IIngredient} from "./IIngredient";

export interface IRouter {
    location: Location,
    action: string
}

export interface IAppReducer {
    ingredients: {
        items: IIngredient[],
        loadingIngredient: boolean,
        hasErrorLoadIngredient: boolean
    }
}

export interface IBurgerConstructorReducer {
    constructor: {
        bun: IIngredient,
        items: IIngredient[]
    }
}

export interface IOrderDetailsReducer {
    order: {
        name: string,
        number: number
    }
}

export interface IRegisterOrderReducer {
    user: {
        email:string,
        name:string
    },
    isAuth:boolean,
    errorMessage:string,
    resetPassword:boolean

}