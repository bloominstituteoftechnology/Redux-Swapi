import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { charsReducer } from "./reducers/starWarsReducer";
// needed dependancies done
// applyMiddleware from redux done
// thunk from redux-thunk done
// logger from redux-logger done
// rootReducer from ./reducers done

const store = createStore(charsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
