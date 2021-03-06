import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {store,history} from "./serivice/store";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
            <App/>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
