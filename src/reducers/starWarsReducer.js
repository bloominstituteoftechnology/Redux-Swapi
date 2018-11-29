import { FETCHING, SUCCESS, ERROR } from "../actions";

const initialState = {
  chars: [],
  error: null,
  fetching: false
  // fetched: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    case SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        chars: [...state.chars, ...action.payload]
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
