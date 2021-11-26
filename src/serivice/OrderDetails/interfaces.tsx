import {ORDER_ERROR, ORDER_REQUEST, ORDER_SUCCESS} from "./actions";
import {IOrderData} from "../interfaces/IOrder";

interface IOrderSuccess {
    readonly type: typeof ORDER_SUCCESS
    data?: IOrderData

}

interface IOrderRequest {
    readonly type: typeof ORDER_REQUEST
}

interface IOrderError {
    readonly type: typeof ORDER_ERROR
}

export type TOrder =
        IOrderSuccess |
        IOrderRequest |
        IOrderError ;