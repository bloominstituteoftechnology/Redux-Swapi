import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";// applyMiddleware from redux
import rootReducer from "./reducers";// rootReducer from ./reducers
// needed dependancies
// applyMiddleware from redux
import thunk from 'redux-thunk';// thunk from redux-thunk
import logger from 'redux-logger'// logger from redux-logger


const store = createStore(
  rootReducer,
  applyMiddleware(logger,thunk)
  
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
