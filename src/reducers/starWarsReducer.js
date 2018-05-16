import { FETCHING_CHARACTERS, FETCH_CHARACTERS, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return Object.assign({}, state, { fetching: true });
    case FETCH_CHARACTERS:
      return Object.assign({}, state, { characters: state.characters.concat(action.payload), fetching: false, fetched: true });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
