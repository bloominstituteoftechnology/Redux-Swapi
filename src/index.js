import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// needed dependancies
// applyMiddleware from redux -- see above
// thunk from redux-thunk
import thunk from 'redux-think';
// logger from redux-logger
import logger from 'redux-logger';
// rootReducer from ./reducers
import rootReducer from './reducers';

const store = createStore(/* rootReducer */, /* applyMiddleware goes here */);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
