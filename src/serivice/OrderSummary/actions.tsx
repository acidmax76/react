import {AppDispatch, AppThunk} from "../types";
import {fetchWithRefresh} from "../utils";
import {IRequestOptions} from "../interfaces/IRequestOptions";
import {IResponseBody} from "../interfaces/IResponseBody";
import {IOrderSummary} from "./interfaces";

export const name = "OrderSummaryReducer";
export const API_URL = "https://norma.nomoreparties.space/api/orders/";

export const ORDER_SUMMARY_SUCCESS:"ORDER_SUMMARY"="ORDER_SUMMARY";
export const ORDER_SUMMARY_ERROR:"ORDER_SUMMARY_ERROR"="ORDER_SUMMARY_ERROR";
export const ORDER_SUMMARY_REQUEST:"ORDER_SUMMARY_REQUEST"="ORDER_SUMMARY_REQUEST";


export const getOrderSummary:AppThunk=(data:number) => async (dispatch: AppDispatch) => {
    try {
            dispatch({
                type: ORDER_SUMMARY_REQUEST,
            });

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestOptions:IRequestOptions = {
                method: 'GET',
                headers: headers,
            };
            const order:IResponseBody<IOrderSummary> = await fetchWithRefresh(API_URL+data, requestOptions);
            if (order.orders !== undefined) {
                dispatch({
                    type: ORDER_SUMMARY_SUCCESS,
                    data: order.orders[0]
                });
            } else {
                dispatch({
                    type: ORDER_SUMMARY_ERROR,
                })
            }
    } catch (e) {
        dispatch({
            type: ORDER_SUMMARY_ERROR,
        });
    }
}
