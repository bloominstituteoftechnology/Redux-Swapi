import { FETCHING_DATA, LOAD_SUCCESS, LOAD_FAILURE } from "../actions";

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING_DATA:

    case LOAD_SUCCESS:

    case LOAD_FAILURE:
    
    default:

      return state;
  }
};
