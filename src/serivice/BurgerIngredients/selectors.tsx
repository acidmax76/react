import {createSelector, Selector} from "reselect";
import {name} from "./actions";
import {IStore} from "../interfaces/IStore";
import {IIngredient} from "../interfaces/IIngredient";


const getIngredients: Selector<IStore, IIngredient[]> = (store) => store[name].ingredients.items;


export const getItems = createSelector(getIngredients, items => items);