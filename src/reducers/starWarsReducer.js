import {} from '../actions';
import {FETCHING, FETCHED, ERRORS } from '../actions/index';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null, 
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return Object.assign({}, state, {fetching: true, fetched: false, error: null });
    case FETCHED:
      return Object.assign({}, state, { fetching: false, chars: action.payload, fetched: true });
    case ERRORS:
      return Object.assign({}, state, { fethcing: false, fetched: false, error: action.payload });
    default:
      return state;
  }
};
