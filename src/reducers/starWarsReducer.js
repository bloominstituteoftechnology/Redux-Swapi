import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_CHARS:
      return {...state, fetching: true};
    case CHARS_RECEIVED:
      console.log(action.payload);
      return {
        ...state,
        fetched: true,
        fetching: false,
        chars: action.payload
      };
    case ERROR_FETCHING_CHARS:
      return { ...state, fetching: false, error: action.payload };
    
    default:
      return state;
  }
};
