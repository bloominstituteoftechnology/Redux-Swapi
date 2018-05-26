import {FETCHED_CHARS} from '../actions';
import {FETCHING_CHARS} from '../actions';
import {ERROR} from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return Object.assign( {}, state, {fetching: true});
    case FETCHED_CHARS:
      return Object.assign( {}, state, {fetched: true, fetching: false, chars: action.payload})
    case ERROR:
      return Object.assign( {}, state, {fetched: false, fetching: false, error: action.payload})
    default:
      return state;
  }
};
