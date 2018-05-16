import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// needed dependancies
// applyMiddleware from redux
import { thunk, logger } from 'redux-thunk';
// thunk from redux-thunk
// logger from redux-logger
import { rootReducer } from './reducers'
// rootReducer from ./reducers

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
