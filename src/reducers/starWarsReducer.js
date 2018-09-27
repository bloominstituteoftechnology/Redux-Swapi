import { FETCHING_DATA, FETCHED_DATA } from "../actions";
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: true,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return {
        ...state,
        fetching: !state.fetching
      };

    case FETCHING_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case FETCHED_DATA:
      return {
        ...state,
        chars: action.payload,
        fetched: !state.fetched
      };

    default:
      return state;
  }
};
