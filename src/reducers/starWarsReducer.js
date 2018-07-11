import {
  FETCHING,
  FETCHED,
  ERROR
} from /* we need our action types here*/ "../actions";
const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null
};
// define a few properties here.
// Array chars, Boolean fetching, Boolean fetched, null error.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case FETCHED:
      console.log(action.payload);
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      };
    case ERROR:
      return { ...state, fetching: false, error: action.payload };
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
