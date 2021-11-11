import {FAILED_LOAD_INGREDIENTS, LOADING_INGREDIENTS, SUCCESS_LOAD_INGREDIENTS} from "./actions";
import {IIngredient} from "../interfaces/IIngredient";

 interface ILoadingIngredients {
    readonly type: typeof LOADING_INGREDIENTS;
}

 interface ISuccessLoadIngredients {
    readonly type: typeof SUCCESS_LOAD_INGREDIENTS;
    readonly items:IIngredient[]
}

 interface IFailedLoadIngredients {
    readonly type: typeof FAILED_LOAD_INGREDIENTS;
}



export type TLoadIngredients =
    ILoadingIngredients |
    ISuccessLoadIngredients |
    IFailedLoadIngredients ;
