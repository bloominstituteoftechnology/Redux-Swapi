import { FETCHING_CHARS } from "../actions";
import { FETCH_SUCCESS } from "../actions";
import { FETCH_FAILED } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
    return {...state, fetching: true};
    case FETCH_SUCCESS:
    return {...state, characters: action.payload, fetching: false};
    case FETCH_FAILED:
    return {...state, error: action.payload}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
