import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// needed dependencies

import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import rootReducer from './reducers'; // This line of code made my props.chars undefined in App.js
import { charsReducer } from './reducers/starWarsReducer'

const store = createStore(charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
