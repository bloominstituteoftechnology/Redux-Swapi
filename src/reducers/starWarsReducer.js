import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetchingChar: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        fetchingChar: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetchingChar: false
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingChar: false,
        error: 'Error fetching Characters'
      });
    default:
      return state;
  }
};
