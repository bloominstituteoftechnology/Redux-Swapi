import { FETCHING_DATA, FETCHED_DATA, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingData: true });
    case FETCHED_DATA:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetchingData: false
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingData: false,
        error: 'Error fetching Data'
      });

    default:
      return state;
  }
};
