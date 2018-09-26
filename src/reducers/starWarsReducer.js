import {FETCHING, FETCHED, ERROR} from '../actions';
const initialState = {
  chars: [], fetching: false, fetched:false, error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true}
    case FETCHED:
      return {...state, fetched: true}
    case ERROR:
      return {...state, fetching: false, error: 'error fetching data'}
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
