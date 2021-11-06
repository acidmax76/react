import {createSelector, Selector} from "reselect";
import {name} from "./actions";
import {IOrder} from "../interfaces/IOrder";
import {IStore} from "../interfaces/IStore";

const getOrder:Selector<IStore, IOrder> = (store) => store[name].order;

export const getOrders = createSelector(getOrder, order => order);