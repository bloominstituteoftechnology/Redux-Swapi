import { FETCHING_CHARS, 
      ERROR_FETCHING_CHARS, 
      CHARS_FETCHED } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
    chars: [],
    error: null,
    fetching: false,
    fetched: false
};

export const charsReducer = (state = initialState, action) => {
      // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
  switch (action.type) {
    case FETCHING_CHARS:
    //creating new copies of the state and adapting the new copies
      return Object.assign({}, state, {fetching: true});
    case ERROR_FETCHING_CHARS:
      return Object.assign({}, state, {
        fetching: false, 
        error: action.payload
      });
    case CHARS_FETCHED:
      return Object.assign({}, state, {
        fetching: false, 
        fetched: true,
        chars: [...state.chars, ...action.payload]
      });
    default:
      return state;
  }
};
