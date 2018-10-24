import {FETCHED, FETCHING, ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  fetched: false,
  error: null
};
export default charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return state = {...state, isFetching: true, fetched: false};
    case FETCHED:
    return state = {...state, isFetching: false, fetched: true, chars: action.payload}
    case ERROR: 
    return state = {...state, isFetching: false, fetched: false, error: action.payload}

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
