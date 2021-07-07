import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux" ;
import thunk from "redux-thunk";
import logger from "redux-logger";
import charsReducer from "./reducers";



const store = createStore(
  charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
