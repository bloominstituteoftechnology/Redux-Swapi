import {FETCHING_CHARS, FETCHING_CHARS_FAILURE, FETCHING_CHARS_SUCCESS} from "../actions";


const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {...state, fetching: true};
    case FETCHING_CHARS_FAILURE:
      return {...state, fetching: false, error: action.payload};
    case FETCHING_CHARS_SUCCESS:
      return {...state, characters: [...state.characters, ...action.payload], fetching: false};
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
