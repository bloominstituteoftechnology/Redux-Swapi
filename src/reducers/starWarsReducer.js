import {FETCHED, FETCHING, ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...state, fetching: true}
    case FETCHED:
      return {...state, chars: action.chars, fetching: false, error: null}
    case ERROR:
      return {...state, error: action.errorMessage}
    default:
      return state;
  }
};
