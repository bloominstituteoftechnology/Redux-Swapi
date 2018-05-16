import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
// needed dependancies
// applyMiddleware from redux DONE
// thunk from redux-thunk DONE
// logger from redux-logger DONE
// rootReducer from ./reducers
import {charsReducer} from './reducers/starWarsReducer'

const store = createStore(charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
