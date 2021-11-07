import {fetchWithRefresh, getCookie} from "../utils";
import {IIngredient} from "../interfaces/IIngredient";
import {Dispatch} from "redux";
import {IResponseBody} from "../interfaces/IResponseBody";
import {IOrderData} from "../interfaces/IOrder";
import {IRequestOptions} from "../interfaces/IRequestOptions";

export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_ERROR = 'ORDER_ERROR'
export const name = 'OrderDetailsReducer';
const API_URL = 'https://norma.nomoreparties.space/api/orders';

export function getOrder(data: { bun: IIngredient | null, items: IIngredient[] }) {
    return async function (dispatch: Dispatch) {
        try {
            const accessToken = getCookie('accessToken');
            if (!accessToken) {
                dispatch({
                    type: ORDER_ERROR,
                });
            } else {
                dispatch({
                    type: ORDER_REQUEST,
                });

                const ingredients = data.items.map(element => element._id);
                if (data.bun) {
                    ingredients.push(data.bun._id);
                    ingredients.push(data.bun._id);
                }
                const headers = new Headers();
                headers.set('Content-Type', 'application/json');
                headers.set('authorization', accessToken)
                const requestOptions:IRequestOptions = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ingredients: ingredients})
                };
                const order:IResponseBody<IOrderData> = await fetchWithRefresh(API_URL, requestOptions);
                dispatch({
                    type: ORDER_SUCCESS,
                    data: order
                });
            }
        } catch (e) {
            dispatch({
                type: ORDER_ERROR,
            });
        }
    }
}