import { FETCHING_CHARS, CHARS_FETCHED, ERROR_FETCHING  } from '../actions/index';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
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
    case FETCHING_CHARS:
      return { ...state, fetching: true };
    case CHARS_FETCHED:
      return { ...state, fetching: false, fetched: true, chars: action.payload };
    case ERROR_FETCHING:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
