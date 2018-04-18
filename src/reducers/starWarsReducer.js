import { FETCHING_CHARACTERS, CHARACTERS_FETCH_SUCCESS, CHARACTERS_FETCH_ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [], fetchingCharacters: false, error: "" 
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return Object.assign({}, state, { fetchingCharacters: true });
    case CHARACTERS_FETCH_SUCCESS:
      return Object.assign({}, state, { 
        characters: [...state.characters, ...action.payload],
        fetchingCharacters: false 
      });
    case CHARACTERS_FETCH_ERROR:
      return Object.assign({}, state, { 
        fetchingCharacters: false,
        error: "Error fetching characters!"
      });
    default:
      return state;
  }
};
