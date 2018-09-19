import { FETCHED, ERROR, FETCHING } from "../actions";

// define a few properties here.
// Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state.chars, fetching: true };
    case FETCHED:
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      };
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching chars"
      });
    default:
      return state;
  }
};
