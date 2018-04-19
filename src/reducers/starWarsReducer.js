import { CHARS_FETCHING, CHARS_FETCHED, CHARS_FETCH_ERROR } from '../actions';
const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHARS_FETCHING": {
      return {...state, fetching: true}
    }
    case "CHARS_FETCHED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        chars: action.payload,
      }
    }
    case "CHARS_FETCH_ERROR": {
      return {...state, fetching: false, error: action.payload}
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};