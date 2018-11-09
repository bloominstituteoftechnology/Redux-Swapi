/*
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
import { applyMiddleware } from "redux";
// thunk from redux-thunk
import { thunk } from "redux-thunk";
// logger from redux-logger
import { logger } from "redux-logger";
// rootReducer from ./reducers
import { rootReducer } from "./reducers";

const store = createStore(
  rootReducer,
  //applyMiddleware goes here 
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
*/

//ADDED CODE
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./App";
import dogsReducer from "./reducers/dogsReducer";
import nameReducer from "./reducers/nameReducer";

import "./styles.css";

// Combine reducers allows us to use multiple reducers for one store.
// combineReducers takes one argument, an object mapping the reducers to a place in the state.
// eg: state = { dogs: {dogsReducer initialState}, name: {nameReducer initialState}}
// In doing so, all actions will be dispatched to all reducers.
const reducers = combineReducers({
  dogs: dogsReducer,
  name: nameReducer
});

// Middleware allows us to extend the functionality of Redux.
// The actions will be passed to the middleware before they are given to the reducer.
// This allows us to manipulate the action before it gets to the reducer
const middleware = applyMiddleware(logger, thunk);

// If we use middleware, we include it as a second argument to createStore.
const store = createStore(reducers, middleware);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
