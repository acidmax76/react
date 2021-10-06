import {createSelector} from "reselect";
import {name} from "./actions";

const getOrder = (store) => store[name].order;

export const getOrders = createSelector(getOrder, (order) => ({order}));