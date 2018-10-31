// 1. The general flow of steps will be to create your store, 2. create your reducers, create your containers, and then create the action creators.


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// applyMiddleware from redux
// logger from redux-logger
import { createStore, applyMiddleware } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// rootReducer from ./reducers
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);