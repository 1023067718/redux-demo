import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import reducer from './index.reducer'
import App from './App'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
