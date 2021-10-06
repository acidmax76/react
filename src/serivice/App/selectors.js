import {createSelector} from "reselect";
import {name} from "./actions";

const getIngredients = (store) => store[name].ingredients;

export const getItems = createSelector(getIngredients, ({ingredients}) => ({ingredients}));