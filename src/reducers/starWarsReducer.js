import {FETCHING_DATA, FETCHED_DATA, ERROR_FETCHING} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
 chars: [], fetching: false, fetched: false, error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED_DATA:
    return Object.assign({}, state, {chars: state.chars.concat(action.payload), fetching: false})
    case FETCHING_DATA:
    return Object.assign({}, state, {fetching: true});
    case ERROR_FETCHING:
    return Object.assign({}, state, {chars: action.error, fetching: false});
    default:
      return state;
  }
};
