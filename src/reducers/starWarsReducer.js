import { FETCH_CHAR_START, FETCH_CHAR_SUCCESS, FETCH_CHAR_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log('charsreducer', action)
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
    case FETCH_CHAR_FAILURE:
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
