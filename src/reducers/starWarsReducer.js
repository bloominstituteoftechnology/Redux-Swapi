import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  isFetched: false,
  hasErrors: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        chars: action.payload,
        isFetched: true,
        isFetching: false
      })
    case ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        hasErrors: true
      })
    default:
      return state;
  }
};
