import {IWSState, TWebsocket} from "../Websocket/interfaces";

const initialState: IWSState = {
    wsConnected: false,
    data: {}
};


export const OrdersReducer = (state = initialState,action:TWebsocket):IWSState => {
    switch (action.type) {
        case "WS_CONNECTION_SUCCESS":
            return {
                ...state,
                error:undefined,
                wsConnected:true
            };
        case "WS_CONNECTION_ERROR":
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case "WS_CONNECTION_CLOSED":
            return {
                data:{},
                error: undefined,
                wsConnected: false
            };
        case "WS_GET_MESSAGE":
            const data = JSON.parse(action.payload)
            return {
                ...state,
                error: undefined,
                data: data
            };
        default : return state;
    }
}