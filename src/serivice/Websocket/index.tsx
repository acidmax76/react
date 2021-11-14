import {Middleware, MiddlewareAPI} from "redux";
import {TApplicationActions, AppDispatch, RootState} from "../types";
import {getCookie} from "../utils";
import {API_ORDER, API_ORDERS} from "./actions";

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) => {
            const {dispatch} = store;
            const accessToken = getCookie('accessToken');
            if (!accessToken) {
                return;
            }
            // @ts-ignore
            const {type, payload} = action;

            if (type === 'WS_CONNECTION_START') {
                const wsUrl = payload ? API_ORDER+accessToken.replace("Bearer ","") : API_ORDERS;
                // объект класса WebSocket
                socket = new WebSocket(wsUrl);
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({type: 'WS_CONNECTION_SUCCESS', payload: event});
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({type: 'WS_CONNECTION_ERROR', payload: event});
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const {data} = event;
                    dispatch({type: 'WS_GET_MESSAGE', payload: data});
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({type: 'WS_CONNECTION_CLOSED', payload: event});
                };
                if (type==='WS_CONNECTION_CLOSE'){
                    socket.close(1000,"Закрыто по требованию");
                }
            }

            next(action);
        };
    }) as Middleware;
};
