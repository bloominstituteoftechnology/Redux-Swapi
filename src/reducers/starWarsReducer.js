import { FETCH_CHARS, FETCHING_CHARS, ERROR } from '../actions'

const initialState = { starwarsCharacters: [], fetching: false, fetched: false, error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS:
    return Object.assign({}, state, {
      starwarsCharacters: action.payload,
      fetching: false,
    });
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, { error: action.payload})
    default:
      return state;
  }
};
