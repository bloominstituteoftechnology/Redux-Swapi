import { FETCHING_DATA, GOT_DATA, ERROR_DISPATCH } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  err: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return {
        ...state,
        fetching: true
      };
    case GOT_DATA:
      return {
        ...state,
        fetching: false,
        chars: action.payload
      };
    case ERROR_DISPATCH:
      return {
        ...state,
        err: alert(action.payload)
      };
    default:
      return state;
  }
};
