import { CHARERROR, CHARFETCHED, CHARFETCHING } from '../actions';
const initialState = {
  fetching: false,
  chars: [],
  fetched: false, 
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARFETCHING:
      return Object.assign({}, state, { fetching: true });
    case CHARFETCHED: 
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false, fetched: true})
    case CHARERROR:
    return Object.assign({}, state, {
      fetching: false,
      error: 'Error fetching chars'
    })
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
