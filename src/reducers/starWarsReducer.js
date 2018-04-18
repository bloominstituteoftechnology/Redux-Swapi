import { GET_CHARS, FETCHING_CHARS, ERROR_FETCHING_CHARS } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null// define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: true };
    case ERROR_FETCHING_CHARS:
      return { ...state, fetching: false, error: action.payload };
    case GET_CHARS:
      console.log(action.payload);
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      };// Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
