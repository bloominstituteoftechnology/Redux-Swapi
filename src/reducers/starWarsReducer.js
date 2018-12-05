import { charsReducer } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
