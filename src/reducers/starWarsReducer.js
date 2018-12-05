import { FETCHING, SUCSESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  err: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case SUCSESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        err: null
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        err: action.payload
      };
    default:
      return state;
  }
};
