import { 
  FETCH_CHAR_START, 
  FETCH_CHAR_SUCCESS, 
  FETCH_CHAR_FAILURE
 } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("from reducer", state.characters)
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
    console.log('FETCH_CHAR_START .... =', action.payload)
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHAR_SUCCESS:
      console.log('FETCH_CHAR_SUCCESS ===', action.payload)
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
