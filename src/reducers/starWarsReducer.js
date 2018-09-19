import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  //fetched: true,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching characters"
      });
    default:
      return state;
  }
};
