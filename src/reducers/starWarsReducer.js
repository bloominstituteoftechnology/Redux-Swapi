import { FETCHING_CHARS, FETCHED_CHARS, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: Boolean,
  fetched: Boolean,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED_CHARS:
      return Object.assign({}, state, {
        chars: state.chars.concat(action.payload),
        fetching: false
      });
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return err;
    default:
      return state;
  }
};
