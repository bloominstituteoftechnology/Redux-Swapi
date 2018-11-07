import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from "./reducers";

// needed dependencies
import { applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk'; // taking entire library (aka middleware)
import  logger  from 'redux-logger';  // taking entire library (aka middleware)
import { charsReducer } from './reducers/starWarsReducer';
// import { combineReducers } from 'redux';

// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
const middleware = applyMiddleware(thunk, logger);

/* applyMiddleware goes here */
const store = createStore(charsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
