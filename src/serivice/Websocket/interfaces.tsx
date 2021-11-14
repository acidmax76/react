import {
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE, WS_SEND_MESSAGE
} from "./actions";
import {IClientOrders} from "../interfaces/IClientOrder";

interface IConnectionStart {
    type: typeof WS_CONNECTION_START
    payload: boolean
}

interface IConnectionSuccess {
    type: typeof WS_CONNECTION_SUCCESS,
    payload: Event
}

interface IConnectionError {
    type: typeof WS_CONNECTION_ERROR,
    payload: Event
}

interface IGetMessage {
    type: typeof WS_GET_MESSAGE,
    payload: string
}

interface IConnectionClose{
    type: typeof WS_CONNECTION_CLOSE,
    payload: Event
}

interface IConnectionClosed {
    type: typeof WS_CONNECTION_CLOSED,
    payload: Event
}

interface ISendMessage {
    type: typeof WS_SEND_MESSAGE,
    payload: Event
}


export interface IWSState {
    wsConnected: boolean,
    data:IClientOrders | {}
    error?: Event
}



export type TWebsocket =
        IConnectionStart |
        IConnectionSuccess |
        IConnectionError |
        IGetMessage |
        IConnectionClosed |
        ISendMessage |
        IConnectionClose;