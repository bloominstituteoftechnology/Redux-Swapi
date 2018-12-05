import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import logger from 'redux-logger';
import App from './App';
import './index.css';


// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const store = createStore( rootReducer, applyMiddleware(thunk));

ReactDOM.render( 
  <Provider store={ store }>
    <App />
  </Provider>,
    document.getElementById("root")
);