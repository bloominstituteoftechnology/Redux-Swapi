import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  characters: [], isFetching: false, error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, isFetching: true };
    case FETCHED:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case ERROR:
      return { ...state, isFetching: false, error: action.payload };
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
