import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  Thunk  from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

//How do you know when to use curly braces on your imports and when not to?

const store = createStore(rootReducer, applyMiddleware(Thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
