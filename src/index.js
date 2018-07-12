import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// needed dependancies
// applyMiddleware from redux
import { applyMiddleware, createStore } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
// import logger from 'redux-logger';
// rootReducer from ./reducers
import rootReducer from './reducers/index';

const logger = store => next => action => {
  console.log('STORE: ', store);
  console.log('NEXT', next);
  console.log('ACTION', action);

  const result = next(action);
  console.log('New State', store.getState());
  console.groupEnd();
}

const store = createStore( rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);