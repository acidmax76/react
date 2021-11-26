import {ORDER_SUMMARY_SUCCESS,ORDER_SUMMARY_ERROR,ORDER_SUMMARY_REQUEST} from "./actions";

export interface IOrderSummary {
    readonly _id:string,
    readonly ingredients:string[],
    readonly owner:string,
    readonly status:string,
    readonly name:string,
    readonly createdAt:string,
    readonly updatedAt:string,
    readonly number:number,
    readonly __v:number
}

export interface IOrderSummaryReducer {
    orders: IOrderSummary | {},
    hasError:boolean
}

interface IOrderSummarySuccess {
    readonly type: typeof ORDER_SUMMARY_SUCCESS
    data?: IOrderSummary

}

interface IOrderSummaryRequest {
    readonly type: typeof ORDER_SUMMARY_REQUEST
}

interface IOrderSummaryError {
    readonly type: typeof ORDER_SUMMARY_ERROR
}

export type TOrderSummary =
        IOrderSummarySuccess |
        IOrderSummaryRequest |
        IOrderSummaryError ;
