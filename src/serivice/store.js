import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {RootReducer} from "./RootReducer";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = createStore(RootReducer,enhancer);