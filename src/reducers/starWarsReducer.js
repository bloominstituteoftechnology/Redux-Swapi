import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        characters: [],
        fetching: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        characters: [...action.payload],
        fetching: false,
        error: ''
      }
    case FAILURE:
      return {
        ...state,
        characters: [],
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
