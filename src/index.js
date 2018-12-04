import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import rootReducer from "./reducers";

// needed dependancies
// applyMiddleware from redux (check)
// thunk from redux-thunk (check)
// logger from redux-logger (check)
// rootReducer from ./reducers (check)

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
