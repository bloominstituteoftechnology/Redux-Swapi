import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// needed dependancies
// applyMiddleware from redux DONE
// thunk from redux-thunk DONE
// logger from redux-logger DONE
// rootReducer from ./reducers

const store = createStore(/* rootReducer */, /* applyMiddleware goes here */);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
