import { FETCHING, ERROR_FETCHING, FETCHED } from '../actions';
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return 
    case ERROR_FETCHING:
    return
    case FETCHED:
    return 
    default:
      return state;
  }
};
