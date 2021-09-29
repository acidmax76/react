import {InitialState} from "./initialState";
import {ORDER_ERROR,ORDER_REQUEST,ORDER_SUCCESS} from "../../../components/OrderDetails/OrderDetails";
export const OrderDetailsReducer = (state=InitialState, action) => {
    console.log(state);
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