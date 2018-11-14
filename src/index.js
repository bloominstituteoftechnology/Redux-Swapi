import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from "./App";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
// + thunk from redux-thunk
// + logger from redux-logger
// + rootReducer from ./reducers

const middleWare = applyMiddleware(logger, thunk);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleWare
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
