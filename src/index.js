// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Dependencies
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Components
import { App } from './components';

// Reducer
import rootReducer from './reducers';

// Styles
import './index.css';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

// const store = createStore(/* rootReducer */, /* applyMiddleware goes here */);
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
