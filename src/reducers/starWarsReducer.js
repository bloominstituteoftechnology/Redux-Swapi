import { GET, FETCHING, ERROR_FETCHING } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  fetching: false,
  fetched: false,
  starChars: [],
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...state, fetching: true };
      case ERROR_FETCHING:
      return {...state, fetching: false, error: action.payload };
      case GET:
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      };
    default:
      return state;
  }
};
