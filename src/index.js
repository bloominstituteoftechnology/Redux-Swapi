import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'; //  // make async functions
import thunk from 'redux-thunk'; // make async functions
import rootReducer from './reducers'
import logger from 'redux-logger'; // print out actions and states

const store = createStore( rootReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
