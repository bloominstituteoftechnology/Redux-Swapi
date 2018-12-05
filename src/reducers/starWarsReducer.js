import { FETCH_CHAR_START, FETCH_FAILURE, FETCH_SUCCESS } /* we need our action types here*/ from "../actions";
const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        characters: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};


