import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {RootReducer} from "./RootReducer";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import {socketMiddleware} from "./Websocket";

export const history = createBrowserHistory();

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk,routerMiddleware(history),socketMiddleware()));
export const store = createStore(RootReducer(history),enhancer);