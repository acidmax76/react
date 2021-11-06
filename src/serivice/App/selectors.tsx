import {createSelector} from "reselect";
import {name} from "./actions";
import {Selector} from "react-redux";
import {IStore} from "../interfaces/IStore";
import {IAppReducer} from "../interfaces/IReducers";

const getIngredients:Selector<IStore, IAppReducer> = (store) => store[name];

export const getItems = createSelector(getIngredients, ingredients => ingredients);