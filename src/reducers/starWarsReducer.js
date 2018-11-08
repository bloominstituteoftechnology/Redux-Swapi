import { FETCHING, SUCCESS, FAILURE } from "../actions";
/* we need our action types here*/


const initialState = {
  characters: [],
  fetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 

    case SUCCESS:

    case FAILURE: 
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
