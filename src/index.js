import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// needed dependancies
// applyMiddleware from redux
import thunk from "redux-thunk";
import logger from "redux-logger";
import charReducer from "./reducers";

const store = createStore(charReducer, applyMiddleware(thunk, logger));
/* applyMiddleware goes here */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
