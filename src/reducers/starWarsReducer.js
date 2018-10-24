import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS } from '../actions';
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
