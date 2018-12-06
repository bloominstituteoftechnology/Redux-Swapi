import { FETCHING_CHARACTERS, CHARACTER_FETCH_SUCCESS, CHARACTER_FETCH_ERROR } from "../actions";

const initialState = {
  characters: [],
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return Object.assign({}, state, { fetchingDogs: true });
    case CHARACTER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        fetchingCharacters: false
      });
    case CHARACTER_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingCharacters: false,
        error: "Error fetching Star Wars Characters, the Empire has won..."
      })
    default:
      return state;
  }
};
