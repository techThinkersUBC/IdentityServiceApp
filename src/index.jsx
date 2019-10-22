import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(
            ReduxThunk,
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

