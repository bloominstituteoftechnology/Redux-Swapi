import { FETCH_CHARS, CHARS_FETCH_YES, CHARS_FETCH_ERR } from '../actions';

    // define a few properties here.
    // Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = { 
  chars: [],
  error: null,
  fetching: false, 
  fetched: false
};
  

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_CHARS:
      return Object.assign({}, ...state, { fetching: true, fetched: false });
    case CHARS_FETCH_ERR:
      return Object.assign({}, ...state, { fetching: false });
    case CHARS_FETCH_YES:
      return Object.assign({}, ...state, { fetching: false, fetched: true });
    default:
      return state;
  }
};
