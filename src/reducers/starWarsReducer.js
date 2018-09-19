import {
  FETCH_CHARS_REQUEST,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE 
} from  '../actions';
 // const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
// };
export const charsReducer = (state = [], action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

 export const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_CHARS_REQUEST:
      return true;
    case FETCH_CHARS_SUCCESS:
    case FETCH_CHARS_FAILURE:
      return false;

    default:
      return state;
  }
};
