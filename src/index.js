import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import { App } from "./components";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
=======
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const store = createStore(
  rootReducer
  /* applyMiddleware goes here */
);
>>>>>>> 8f9d32cbac00644036daa58a0375eaf72bd345fe

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
