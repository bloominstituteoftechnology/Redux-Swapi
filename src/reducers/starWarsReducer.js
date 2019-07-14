import {
  FETCH_SWAPI_START,
  FETCH_SWAPI_SUCCESS,
  FETCH_SWAPI_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  error: null,
  fetching: false  
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWAPI_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SWAPI_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      };
    case FETCH_SWAPI_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };  
    
    default:
      return state;
  }
};
