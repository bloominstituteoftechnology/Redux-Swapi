import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// needed dependancies
// applyMiddleware from redux which I did above in conjunction with createStore
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
import logger from "redux-logger";
// rootReducer from ./reducers

const store = createStore( ()=> {}/* rootReducer */,  applyMiddleware(thunk, logger)/* applyMiddleware goes here */);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
