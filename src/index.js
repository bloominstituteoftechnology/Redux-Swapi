import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { charsReducer } from './reducers/starWarsReducer';
import combineReducers from './reducers';

import { App } from './components';

import './index.css';

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
