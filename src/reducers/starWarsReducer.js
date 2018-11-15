import { FETCHING, SUCCESS, FAILURE, LOADING } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null 
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
   case LOADING: 
   return {type: LOADING}
   case FETCHING:
   return {type: FETCHING}
  
  case SUCCESS: 
  return {type: SUCCESS}

  case FAILURE:
  return {type: FAILURE}
  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
