import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers'

const allStoreEnhancers = compose(
  applyMiddleware(thunk, logger));

const store = createStore(rootReducer, allStoreEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
