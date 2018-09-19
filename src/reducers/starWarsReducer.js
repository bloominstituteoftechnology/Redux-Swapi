import /* we need our action types here*/ { FETCHING_CHARS, CHARS_FETCHED_SUCCESS, CHARS_FETCHED_ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars:[],
  fetchingChars: true,
  fetchedChars: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
        return {fetchingChars: true}
      // return Object.assign({}, state, {
      //   fetchingChars: true
      // });
      
    case CHARS_FETCHED_SUCCESS:
      return {...state, chars:action.payload, fetchingChars: false};
      // return Object.assign({}, state, {
      //   chars: [...state.chars, ...action.payload],
      //   fetchingChars: false
      // });
    case CHARS_FETCHED_ERROR:
      return {fetchingChars: false, fetchedChars: false, error:'Error Fetching Characters!'};
      // return Object.assign({}, state, {
      //   fetchingChars: false,
      //   error: 'Error Fetching Star Wars Characters!'
      // });
    default:
      return state;
  }
};
