import {} from '../actions';
import {FETCHING, FETCHED, ERRORS } from '../actions/index';


const initialState = {
  chars: [],
  fetching: false,
  error: null, 
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
    case FETCHED:
    case ERRORS:
    default:
      return state;
  }
};
