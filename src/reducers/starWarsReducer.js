import {FETCHING,
        SUCCESS,
        FAILURE} 
from  "../actions";


const initialState = {
  error: "",
  isFetching: false,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducers = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {
      ...state,
      error: "",
      isFetching: true,
    };
  case SUCCESS:
    return {
      ...state,
      isFetching: false,
      characters: action.payload
     
    };
  case FAILURE:
    return {
     ...state,
     isFetching: false,
     error: action.payload
    
    };
  default:
    return state;


  }
};
