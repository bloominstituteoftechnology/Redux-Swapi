
import React from "react";
import ReactDOM from "react-dom";
//Styling
import "./index.css";
// importing from app component
import App from "./App";
// importing redux dependencies
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// importing the rootreducer which handles both index and starwars reducers
import rootReducer from "./reducers";


// create the store
const store = createStore(
  rootReducer, 
  applyMiddleware (thunk, logger)
);

// wrap app with provider which gives redux and its dependencies access. 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
