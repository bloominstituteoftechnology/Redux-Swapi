import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import charsReducer from "./reducers";
/* import rootReducer from './reducers'; */

//const store = createStore(charsReducer, applyMiddleware(thunk, logger));
const initialState = {};
const middleware = [thunk, logger];
const store = createStore(
      charsReducer, 
      initialState, 
     compose(
          applyMiddleware(...middleware), 
           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()                
     )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);