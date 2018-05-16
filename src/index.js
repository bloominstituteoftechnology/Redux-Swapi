import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// needed dependancies
// applyMiddleware from redux
import { createStore, applyMiddleware} from 'redux';
// thunk from redux-thunk
import think from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
// rootReducer from ./reducers
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(think, logger));
console.log("combineReducers",combineReducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 