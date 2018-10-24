import {
  FETCHING_CHARS,
  FETCHING_CHARS_SUCCESS,
  FETCHING_CHARS_FAILURE
} from "../actions";
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
