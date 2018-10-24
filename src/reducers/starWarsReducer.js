import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_FAILURE,
  FETCHING_CHARACTERS_SUCCESS
} from "../actions";
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return { ...state, fetching: true };
    case FETCHING_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    default:
      return state;
  }
};
