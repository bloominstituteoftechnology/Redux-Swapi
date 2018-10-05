import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore,
         applyMiddleware,  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { charsReducer } from './reducers/starWarsReducer';
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

// instead of passing our initial state directly to our createStore() function, we can pass it applyMiddleware as a second argument.
// Then, anything we add to applyMiddleware we'll have access to once we pass it to our store and set it as a property on the <Provider /> component.
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
