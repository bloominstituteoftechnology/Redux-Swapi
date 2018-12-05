import {FETCHING, SUCCESS, FAILURE} from "../actions";

// Array characters, Boolean fetching, null error.
const initialState = {
  characters: [],
  error: null,
  fetching: false
  
};
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
    };

    case SUCCESS:
    return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
    };

    case FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
    
    default:
      return state;
  }
};
