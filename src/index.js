import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from "redux";

import { starWarsReducer } from './reducers'
import App from './App';

import './index.css';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const reducers = combineReducers({ movies, characters });
const middlewareQueue = applyMiddleware(logger, reduxThunk);
const store = createStore(reducers, middlewareQueue);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
