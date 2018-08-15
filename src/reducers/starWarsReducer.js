import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  hasFetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
    console.log('fetching');
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCHED:
    console.log('fetched');
    return Object.assign({}, state, {
      isFetching: false,
      hasFetched: true,
      chars: [...state.chars, ...action.payload]
    });
    case ERROR:
    console.log('error');
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};
