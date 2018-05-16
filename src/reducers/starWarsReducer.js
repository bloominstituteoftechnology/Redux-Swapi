import { FETCHING, FETCHED, ERRORS } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: ['hola','caracola'],
  fetching: true,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return state;
      case FETCHED:
        return Object.assign({}, state, {chars: action.chars, fetching: false})
    default:
      return state;
  }
};
