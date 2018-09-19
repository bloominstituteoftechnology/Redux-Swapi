import { FETCHING_CHARS, CHARS_FETCH_SUCCESS, CHARS_FETCH_ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetchingChars: true });
    case CHARS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetchingChars: false
      });
    case CHARS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingChars: false,
        error: 'Error fetching Chars'
      });
    default:
      return state;
  }
};
