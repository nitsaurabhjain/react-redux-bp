import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import allReducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import App from './App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);