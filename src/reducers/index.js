import { combineReducers } from 'redux';
import chars from './charsReducer';
import fetching from './fetchReducer';

  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

export default combineReducers({
  chars, fetching, 
});

export const getFetchingState = (state) => {
  return state.fetching
};

export const getChars = (state) => {
  return state.chars
};
