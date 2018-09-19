import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// needed dependancies
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
