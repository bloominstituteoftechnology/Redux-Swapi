import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
import thunk from 'redux-thunk';// thunk from redux-thunk
import logger from 'redux-logger'; // logger from redux-logger
// rootReducer from ./reducers

const middleware = applyMiddleware(logger, thunk);
const store = createStore(
  rootReducer,
  middleware,
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// first commit