import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, fetching: true };
    case FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case SUCCESS:
      return { ...state, fetching: false, error: '', characters: action.payload };
    default:
      return state;
  }
};
