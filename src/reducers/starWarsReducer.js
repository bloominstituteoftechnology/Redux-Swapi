import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: true,
  error: null,
};

export const charsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING: 
      return Object.assign({}, previousState, { fetching: true });

    case SUCCESS:
      return Object.assign({}, previousState, { characters: action.payload, fetching: false, error: null });

    case FAILURE: 
      return Object.assign({}, previousState, { characters: [], fetching: false, error: action.payload });

    default:
      return previousState;
  }
};
