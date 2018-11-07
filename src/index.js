import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //  // make async functions
import thunk from 'redux-thunk'; // make async functions
import logger from 'redux-logger'; // print out actions and states
import { charsReducer } from './reducers/starWarsReducer'

const store = createStore( charsReducer, applyMiddleware(thunk,logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
