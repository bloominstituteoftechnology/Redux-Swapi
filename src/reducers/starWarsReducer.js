import {FETCHING, FETCHED, ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [], fetching: false, error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {fetching: true});
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false
      })
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching Characters.'
      })
    default:
      return state;
  }
};
