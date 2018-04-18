import {  applyMiddleware, createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
import thunk from 'redux-thunk';
import {charsReducer}  from './reducers/starWarsReducer';

const store = createStore(charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
