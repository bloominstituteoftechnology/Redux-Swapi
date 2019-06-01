import { GET_SWAPI, ERROR, SUCCESS } from "../actions"; /* we need our action types here*/
const initialState = {
  characters: [],
  loading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SWAPI:
      return {
        ...state,
        loading: true,
        characters: [],
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        characters: [],
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
