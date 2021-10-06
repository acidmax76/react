import {createSelector} from "reselect";
import {name} from "./actions";

const getIngredients = (store) => store[name].ingredients.items;


export const getItems = createSelector(getIngredients, (items) => ({items}));