import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
    return {
      ...state,
      error: null,
      isFetching: true
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      characters: action.payload
    }
    case FETCH_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
