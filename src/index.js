import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers


// Simply put, middleware is software that sits between 
// our action creators and the reducer stack. Every action 
// will first go through all middleware sequentially before 
// it is sent to the reducers.

// redux-thunk allows us to turn our action creators into 
// async functions by granting them the ability to return 
// 'functions' instead of plain objects.

const store = createStore(/* rootReducer */, /* applyMiddleware goes here */);

// Instead of passing our initial state directly to our 
// createStore() function, we can pass it applyMiddleware
// as a second argument.

// Then, anything we add to applyMiddleware we'll have 
// access to once we pass it to our store and set it as 
// a property on the <Provider /> component.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
