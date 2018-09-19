import { GET_CHARACTERS, FETCHING_CHARACTERS, ERROR_FETCHING_CHARACTERS } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetchingCharacters: false,
  fetchedCharacters: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return Object.assign({}, state, { fetchingCharacters: true });

    case GET_CHARACTERS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        fetchingCharacters: false
      });

    case ERROR_FETCHING_CHARACTERS:
      return Object.assign({}, state, {
        fetchingCharacters: false,
        error: "Error fetching characters"
      });

    default:
      return state;
  }
};