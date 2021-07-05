import {
  SWAPI_REQUEST,
  SWAPI_SUCCESS,
  SWAPI_FAILURE
} from  "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SWAPI_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case SWAPI_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null,
      }
    case SWAPI_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
