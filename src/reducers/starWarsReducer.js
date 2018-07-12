import { CHARS_FETCHED, CHARS_FETCHING, FETCH_ERROR } from '../actions';
import { Object } from 'core-js';
const initialState = {
  // define a few properties here.
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARS_FETCHED: 
    return Object.assign({}, state, {
      fetching: false,
      fetched: true,
      error: null,
      chars: action.payload
      
    })
    case CHARS_FETCHING:
    return Object.assign({}, state, {
      fetching: true,
      fetched: false,
      error: null,
  })
    case FETCH_ERROR:
    return Object.assign({}, state, {
      fetching: false,
      fetched: false,
      error: action.payload

    })

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
