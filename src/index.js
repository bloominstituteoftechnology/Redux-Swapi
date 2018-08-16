import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// applyMiddleware from redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
// rootReducer from ./reducers
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
