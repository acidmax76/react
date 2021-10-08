import {createSelector} from "reselect";
import {name} from "./actions";

const ingredients = (store) => store[name].modalIngredient;

export const getIngredients = createSelector(ingredients, (modalIngredient) => ({modalIngredient}));