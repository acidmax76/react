import {IOrderSummaryReducer, TOrderSummary} from "./interfaces";
import {ORDER_SUMMARY_ERROR, ORDER_SUMMARY_REQUEST, ORDER_SUMMARY_SUCCESS} from "./actions";
import {initialState} from "./initialState";

export const OrderSummaryReducer = (state=initialState, action:TOrderSummary):IOrderSummaryReducer => {
    switch (action.type){
        case ORDER_SUMMARY_REQUEST:
            return {
                ...state,orders:{},hasError:false
            };
        case ORDER_SUMMARY_SUCCESS:
            if (action.data) {
                return {
                    ...state, orders: action.data
                };
            } else {
                return state;
            }
        case ORDER_SUMMARY_ERROR:
            return {
                ...state,orders:{},hasError:true
            };
        default:
            return state;
    }
}