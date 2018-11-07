import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import logger from 'redux-logger'
// needed dependancies
// rootReducer from ./reducers

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(logger,thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
