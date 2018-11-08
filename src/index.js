import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



// needed depende ncies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers


// store functionality extended with logger & thunk
const midddleware = applyMiddleware(logger, thunk);           // added

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  midddleware                                               // added
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
