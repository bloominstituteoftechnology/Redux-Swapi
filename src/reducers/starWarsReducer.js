/* we need our action types here*/
import { FETCHING_CHARACTERS, FETCHING_CHARACTERS_SUCCESS, FETCHING_CHARACTERS_FAILURE } from "../actions";


const initialState = {
  characters: [],
  fetching: true,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS: 
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCHING_CHARACTERS_SUCCESS: 
      return {
        ...state,
        characters: [...state, ...action.payload],
        fetching: false,
        error: ''
      };
    case FETCHING_CHARACTERS_FAILURE: 
      return {
      ...state,
      fetching: false,
      error: action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
