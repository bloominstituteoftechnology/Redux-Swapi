import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// rootReducer from ./reducers


ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(logger, thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
