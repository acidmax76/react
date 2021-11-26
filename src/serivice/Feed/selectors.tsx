import {createSelector, Selector} from "reselect";
import {IStore} from "../interfaces/IStore";
import {name} from './actions';
import {IWSState} from "../Websocket/interfaces";

const wsStore: Selector<IStore, IWSState> = (store) => store[name];

export const getWsStore = createSelector(wsStore, store => store);

export const getDoneOrders = createSelector(getWsStore, ({data}) => {
    if ("orders" in data) {
        return data.orders.filter(item => (item.status === "done"));
    } else {
        return [];
    }
});

export const getCreatedOrders = createSelector(getWsStore, ({data}) => {
    if ("orders" in data) {
        return data.orders.filter(item => (item.status === "created" || item.status === 'pending'));
    } else {
        return [];
    }
});