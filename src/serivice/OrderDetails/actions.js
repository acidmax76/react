import {fetchWithRefresh, getCookie} from "../utils";

export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_ERROR = 'ORDER_ERROR'
export const name = 'OrderDetailsReducer';
const API_URL = 'https://norma.nomoreparties.space/api/orders';

export function getOrder(data) {
    return async function (dispatch) {
        try {
            dispatch({
                type: ORDER_REQUEST,
            });

            const ingredients = data.items.map(element => element._id);
            ingredients.push(data.bun._id);
            ingredients.push(data.bun._id);
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': getCookie('accessToken')
                },
                body: JSON.stringify({ingredients: ingredients})
            };
            const order = await fetchWithRefresh(API_URL, requestOptions);
            dispatch({
                type: ORDER_SUCCESS,
                data: order
            });
        } catch (e) {
            dispatch({
                type: ORDER_ERROR,
            });
        }
    }
}