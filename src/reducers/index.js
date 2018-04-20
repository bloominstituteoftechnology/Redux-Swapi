/* we need our action types here*/
import { FETCHED, FETCHING, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  error: null,
};

  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetching: true}
    case FETCHED:
      return {...state, chars: action.chars, fetching: false, error: null };
    case ERROR:
      return {...state, error: action.errorMessage}
      // Fill me in with the important reducers
      // action types should be FETCHING, FETCHED, and ERROR
      // your switch statement should handle all of these cases.
    default:
      return state
  }
}