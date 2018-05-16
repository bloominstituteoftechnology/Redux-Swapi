import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: !state.fetching,
      };
    case FETCHED:
      return {
        ...state,
        chars: state.chars.concat(action.payload),
        fetching: !state.fetching,
        fetched: !state.fetched, 
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};