import {LOADING, ERROR, FETCHED_CHARS} from "../actions";
const initialState = {
  characters: [],
  error: null,
  loading: false

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.

  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {loading: true});
    case FETCHED_CHARS:
      return Object.assign({}, state, {
        characters: action.chars,
        loading: false,
        error: ''
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      });
    default:
      return state
  }
};
