export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_REQUEST='ORDER_REQUEST';
export const ORDER_ERROR='ORDER_ERROR'
export const name='OrderDetailsReducer';
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
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ingredients: ingredients})
            };
            const res = await fetch(API_URL, requestOptions);
            if (!res.ok) {

                throw new Error('Ответ сети был не ok.');
            }
            const order = await res.json()
            if (order.success){
                dispatch({
                    type: ORDER_SUCCESS,
                    data: order
                });
            } else {

                throw new Error('Пришли данные с  success=false.');
            }
        } catch (e) {
            dispatch({
                type: ORDER_ERROR,
            });
            throw new Error(e.message);
        }
    }
}