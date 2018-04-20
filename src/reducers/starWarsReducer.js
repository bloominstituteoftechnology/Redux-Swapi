import { FETCH_CHARS, CHARS_FETCH_YES, CHARS_FETCH_ERR } from '../actions';

    // define a few properties here.
    // Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = { 
  fetching: false, 
  fetched: false,
  chars: [],
  error: null
};
  

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_CHARS:
      return ( ...state, fetching: true );
    case CHARS_FETCH_ERR:
      return ( ...state, fetching: false, error: action.payload );
    case CHARS_FETCH_YES:
      return ( 
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      );
    default:
      return state;
  }
};
