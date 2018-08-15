/* we need our action types here*/ '../actions';
import {FETCHING, FETCHED, ERRORS} from '../actions'

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  isFetched: false,
  errors: [],
  hasErrors: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true,
        chars: action.payload.results
      })
    case ERRORS:
      return Object.assign({}, state, {
        isFetching: false,
        errors: [...state.errors],
        hasErrors: true,
      })
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
