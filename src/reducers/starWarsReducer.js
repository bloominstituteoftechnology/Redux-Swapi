import { FETCHING, FETCHED, ERRORS } from '../actions';
// define a few properties here.
const initialState = { name: [], fetching: false, error: '' };
// Array chars, Boolean fetching, Boolean fetched, null error.
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        name: [action.payload],
        fetching: false
      });
    case ERRORS:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching chars'
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
