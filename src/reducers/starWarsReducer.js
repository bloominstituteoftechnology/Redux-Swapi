import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, fetching: true }
    case FETCHING_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload.results
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
