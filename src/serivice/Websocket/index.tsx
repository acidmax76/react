import {Middleware, MiddlewareAPI} from "redux";
import {AppDispatch, RootState, TApplicationActions} from "../types";
import {getCookie} from "../utils";
import {
    API_ORDER,
    API_ORDERS,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from "./actions";

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) => {
            const {dispatch} = store;
            const accessToken = getCookie('accessToken') ;
            // @ts-ignore
            const {type, payload} = action;

            if (type === WS_CONNECTION_START) {
                const wsUrl = payload ? accessToken ? API_ORDER + accessToken.replace("Bearer ", "") : "" : API_ORDERS;
                if (wsUrl==="") return;
                socket = new WebSocket(wsUrl)
                // объект класса WebSocket

            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({type: WS_CONNECTION_SUCCESS, payload: event});
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({type: WS_CONNECTION_ERROR, payload: event});
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const {data} = event;
                    dispatch({type: WS_GET_MESSAGE, payload: data});
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({type: WS_CONNECTION_CLOSED, payload: event});
                };
                if (type === WS_CONNECTION_CLOSE) {
                    socket.close(1000, "Закрыто по требованию");
                }
            }

            next(action);
        };
    }) as Middleware;
};
