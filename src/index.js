import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';  // applyMiddleware is needed for thunk/logger
import thunk from 'redux-thunk';  // to use thunk library
import logger from 'redux-logger';  // to use logger library
import rootReducers from './reducers';  // when you have multiple reducers


const composeEnhancers = 
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }): compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(rootReducers, enhancer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
