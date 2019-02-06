import React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";


import "./index.css";
import App from "./App";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);





// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers
