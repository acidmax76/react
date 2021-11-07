import {InitialState} from "./initialState";
import {ORDER_ERROR,ORDER_REQUEST,ORDER_SUCCESS} from "./actions";
export const OrderDetailsReducer = (state=InitialState, action:any) => {
    switch (action.type){
        case ORDER_REQUEST:
            return {
              ...state,order:{}
            };
        case ORDER_SUCCESS:
            return {
                ...state,order:{
                    name:action.data.name,
                    number:action.data.order.number
                }
            };
        case ORDER_ERROR:
            return {
                ...state,order:{}
            };
        default:
            return state;
    }
}