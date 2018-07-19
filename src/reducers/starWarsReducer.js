import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, fetching: true }; // no state
    // until data comes back fetching will be true
    case FETCHED:
      return Object.assign({}, state, { fetching: false, fetched: true, chars: action.payload });
    //chars array is set to what comes back from axios
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching Chars'
      });
    default:
      return state;
  }
};
