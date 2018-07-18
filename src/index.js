import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const store = createStore( rootReducer, applyMiddleware(thunk, logger) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
