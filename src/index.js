import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import thunk from 'redux-thunk';




// needed dependancies good to go!
// applyMiddleware from redux good to go!
// thunk from redux-thunk good 2 go!
// logger from redux-logger good 2 go!
// rootReducer from ./reducers good 2 go!

const Middleware = applyMiddleware(ReduxThunk)(createStore);

const store = createStore(
  rootReducer, applyMiddleware(thunk, ...Middleware)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
