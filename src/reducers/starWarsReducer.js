import {FETCHING_CHARS,CHAR_FETCHED_SUCCESS,CHAR_FETCH_ERRROR} from '../actions';

const initialState = {chars:[], fetching: false, error: null };

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_CHARS:
    return Object.assign({}, state, {fetchingchars:true});

    case CHAR_FETCHED_SUCCESS:
    return Object.assign({}, state, {
      chars : [...state.chars, ...action.payload],
      fetchingchars:false

    });

    case CHAR_FETCH_ERRROR:
    return Object.assign({}, state,{
      fetchingchars:false,
      error: 'Error Fetching Characters'
    })
    default:
      return state;
  }
};

// define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

   // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.