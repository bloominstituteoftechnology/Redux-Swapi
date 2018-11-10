import { FETCHING, FETCHED, ERROR } from "../actions/index";

const initialState = {
  characters: [],
  Fetching: false,
  Fetched: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return Object.assign({}, state, {
        Fetching: true,
      })
    case FETCHED:
      return Object.assign({}, state, {
        Fetching: false,
        Fetched: true,
        characters: action.payload,
      })
    case ERROR:
      return Object.assign({}, state, {
        Fetching: false,
        Fetched: false,
        error: action.payload,
      })
    default:
      return state;
  }
};
