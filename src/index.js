import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import App from './App'
import Reducer from "./reducers";
import "./index.css";

const rootElement = document.getElementById("root");
const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
