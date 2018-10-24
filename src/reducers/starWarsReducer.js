import {FETCHING, FAILURE,SUCCESS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return state;
    case SUCCESS:
      return state;
    case FAILURE:
      return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
