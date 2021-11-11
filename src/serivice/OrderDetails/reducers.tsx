import {InitialState} from "./initialState";
import {ORDER_ERROR,ORDER_REQUEST,ORDER_SUCCESS} from "./actions";
import {TOrder} from "./interfaces";
import {IOrderDetailsReducer} from "../interfaces/IReducers";
export const OrderDetailsReducer = (state=InitialState, action:TOrder):IOrderDetailsReducer => {
    switch (action.type){
        case ORDER_REQUEST:
            return {
              ...state,order:{}
            };
        case ORDER_SUCCESS:
            if (action.data) {
                return {
                    ...state, order: {
                        name: action.data.name,
                        number: action.data.number
                    }
                };
            } else {
                return state;
            }
        case ORDER_ERROR:
            return {
                ...state,order:{}
            };
        default:
            return state;
    }
}