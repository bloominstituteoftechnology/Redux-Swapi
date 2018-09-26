import { FETCH_IN_PROGRESS, FETCH_SUCCESS, FETCH_FAIL } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: true,
  fetched: false,
  e: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_IN_PROGRESS:
      return { fetching: true }
    case FETCH_SUCCESS:
      return {...state, chars: action.payload, fetching: false, fetched: true}
    case FETCH_FAIL:
      return { fetching: false, fetched: false, e: 'Error when fetching characters.'}
    default:
      return state;
  }
};
