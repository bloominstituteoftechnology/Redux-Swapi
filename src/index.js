import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import charsReducer from './reducers/starWarsReducer'
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  chars: charsReducer
})

const middleware = applyMiddleware(logger,thunk);

const store = createStore(
reducers, middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
