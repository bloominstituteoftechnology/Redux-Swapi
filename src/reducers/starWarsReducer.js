import { FETCHING_CHARS, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: false, error: action.data }
    case FETCHING_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        fetching: false,
        characters: [...state.character, ...action.data]
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
