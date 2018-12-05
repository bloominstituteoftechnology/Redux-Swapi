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
// applyMiddleware from redux DONE
// thunk from redux-thunk DONE
// logger from redux-logger DONE
// rootReducer from ./reducers ALREADY DONE

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
  /* applyMiddleware goes here DONE*/ 
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
