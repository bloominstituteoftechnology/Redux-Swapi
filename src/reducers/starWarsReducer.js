import {FETCH_CHARACTER_START,
        FETCH_CHARACTER_SUCCESS,
        FETCH_CHARACTER_FAILURE} 
from  "../actions";


const initialState = {
  error: "",
  isLoading: false,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTER_START:
    return {
      ...state,
      error: "",
      isLoading: true
    };
  case FETCH_CHARACTER_SUCCESS:
    return {
      ...state,
      isLoading: false,
      characters: action.payload
     
    };
  case FETCH_CHARACTER_FAILURE:
    return {
      state,
    };
  default:
    return state;


  }
};
