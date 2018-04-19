import { IS_FETCHING, SUCCESSFULLY_FETCHED, ERROR } from '../actions';

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
    case IS_FETCHING:
      return Object.assign({}, state, { fetching: true });

    case SUCCESSFULLY_FETCHED:
      return Object.assign({}, state, {
        characters: [...state, ...action.payload],
        fetching: false,
        fetched: true
      });

    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Looks like we encountered a problem."
      });

    default:
      return state;
  }
};
