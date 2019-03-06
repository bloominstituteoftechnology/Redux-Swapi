import { FETCHING, GET_CHARACTERS, ERROR_GETTING_CHARACTERS } from '../constants'

const initialState = {
  characters: []
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { characters: action.payload, fetching: false };
    case FETCHING:
      return { characters: null, fetching: true };
    case ERROR_GETTING_CHARACTERS:
      return { characters: null, fetching: true };
    default:
      return state;
  }
};
