import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { charsReducer } from "./reducers/starWarsReducer";
// needed dependancies V
// applyMiddleware from redux V
// thunk from redux-thunk V
// logger from redux-logger V
// rootReducer from ./reducers V

const store = createStore(charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
