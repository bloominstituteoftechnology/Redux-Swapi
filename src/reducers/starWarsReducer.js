import { FETCHING_CHARS, CHARS_FETCHED, ERROR_FETCHING_CHARS } from '../actions';
const initialState = {
  chars: [],
  error: null,
  fetching: false,
  fetched: false
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return Object.assign({}, state, { 
        fetching: true,
      });
    case CHARS_FETCHED:
      return Object.assign({}, state, { 
        fetching: false, 
        fetched: true,
        chars: [...state.chars, ...action.payload]
      });
    case ERROR_FETCHING_CHARS:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      })
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
