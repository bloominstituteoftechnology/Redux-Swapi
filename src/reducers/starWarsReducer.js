import {FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
  chars: [ ],
  isFetching: false,
  isFetched: false,
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true 
      });
    case FETCHED:
      return Object.assign({}, state, {
        isFetched: true,
        chars: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        error: "Incorrect Login. Please try again." 
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
