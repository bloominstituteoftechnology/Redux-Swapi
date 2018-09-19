import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// applyMiddleware from redux
import { createStore, applyMiddleware } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';

// rootReducer from ./reducers
import { reducer } from './reducers/index';
import { App } from './components';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);