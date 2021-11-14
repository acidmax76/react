import {createSelector, Selector} from "reselect";
import {IStore} from "../interfaces/IStore";
import {name} from "./actions";
import {IOrderSummaryReducer} from "./interfaces";

const getOrder:Selector<IStore, IOrderSummaryReducer> = (store) => store[name];

export const getSummaryOrders = createSelector(getOrder, order => order);