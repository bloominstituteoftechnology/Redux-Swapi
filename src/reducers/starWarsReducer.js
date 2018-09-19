import { FETCHING_CHAR, CHAR_FETCH_SUCCESS, CHAR_FETCH_ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [], 
  fetchingChars: false,
   error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHAR:
      return Object.assign({}, state, {fetchingChars: true}); //if we are fetching simply trigger the boolean.
    case CHAR_FETCH_SUCCESS:
      return Object.assign({}, state, { 
        chars: [...state.chars, ...action.payload], //if our promise was successful, build out the chars array.
      fetchingChars: false //also, set our boolean to false, because we're no longer fetching
      });
    case CHAR_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingChars: false, //we're also no longer fetching here so set the boolean to false
        error: "Error occured fetching Chars" // now we're getting an error back, set the error message
      });
  
    default:
      return state;
  }
};
