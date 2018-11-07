import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from "./reducers"

const store = createStore(
  rootReducer
  applyMiddleware(reduxThunk, reduxLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
