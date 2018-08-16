import { FETCHING, FETCHED, ERROR } from '../actions';
import { Object } from 'core-js';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  isFetched: false,
  hasError: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars, action.payload],
        isFetched: true
      })
    case ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true
      })
    default:
      return state;
  }
};
