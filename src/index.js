import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// needed dependancies
// applyMiddleware from redux x
// thunk from redux-thunk x
// logger from redux-logger x
// rootReducer from ./reducers x


const middleWare = applyMiddleware(logger, thunk);

const store = createStore(
  rootReducer,
  middleWare
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
