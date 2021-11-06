import {IIngredient} from "./IIngredient";
import {LocationState} from "history";

export interface ITabIngredientProps {
    name:string,
    count: {[x:string]:number  },
    ingredients:IIngredient[],
    location:LocationState,

}