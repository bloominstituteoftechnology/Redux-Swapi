import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// needed dependancies
import thunk from "redux-thunk"
import logger from 'redux-logger'
import combineReducers from './reducers'
// rootReducer from ./reducers it's obviously called combine reducers in the index

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
