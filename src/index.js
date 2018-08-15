import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// needed dependancies
import { applyMiddleware, createStore } from 'redux'; // applyMiddleware from redux
import thunk from 'redux-thunk'; // thunk from redux-thunk
import logger from 'redux-logger'; // logger from redux-logger
import rootReducer from './reducers';// rootReducer from ./reducers

const Middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, Middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
