import {
  FETCHING_CHARS,
  CHAR_FETCH_SUCCESS,
  CHAR_FETCH_ERROR
} from "../actions";

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

    // triggering boolean to true to fetch (GET)
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetchingChars: true });

    // if promise, i.e. fetching, is successful, concat original chars array,
    // boolean set to false; done fetching.
    case CHAR_FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetchingChars: false
      });

    case CHAR_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingChars: false,
        error: "Error fetching the SW Characters"
      });
    default:
      return state;
  }
};

// Above 3 cases mean:
// fetching
// feteched
// errorFetching
