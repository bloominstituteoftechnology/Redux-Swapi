import { FETCHING_CHARACTERS, FETCH_CHARACTERS, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return state;
    case FETCH_CHARACTERS:
      return state;
    case ERROR:
      return state;
    default:
      return state;
  }
};
