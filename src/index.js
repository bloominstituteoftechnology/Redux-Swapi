import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
//Compose - This is a functional programming utility, and is included in Redux as a convenience. You might want to use it to apply several store enhancers in a row.
// needed dependancies
// applyMiddleware from redux - Addded to line 6
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
// rootReducer from ./reducers
import rootReducer from './reducers/index';

// creating a Store and adding Middleware(thunk & logger) to do asynchronous calls and log our state changes respectively.
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(
  /* rootReducer, */
  /* applyMiddleware goes here */ rootReducer,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
