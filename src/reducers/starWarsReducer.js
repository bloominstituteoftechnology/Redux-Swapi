import { FETCHING_CHARACTER, CHARACTER_FETCH_SUCCESS, CHARACTER_FETCH_FAILURE } from '../actions';
import { Object } from 'core-js';
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetchingCharacters: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
      case FETCHING_CHARACTER:
        return Object.assign({}, state, { fetchingCharacters: true });
      case CHARACTER_FETCH_SUCCESS:
        return Object.assign({}, state, {
          characters: [...state.characters, ...action.payload],
          fetchingCharacters: false
        });
      case CHARACTER_FETCH_FAILURE:
        return Object.assign({}, state, {
          fetchingCharacters: false,
          error: "Error fetching characters"
        });
    default:
      return state;
  }
};
