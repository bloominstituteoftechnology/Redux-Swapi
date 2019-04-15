//react
import React from "react"
import ReactDOM from "react-dom"
//redux
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
//middleware
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//local
import App from "./App"
import rootReducer from "./reducers"
import "./index.css"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)