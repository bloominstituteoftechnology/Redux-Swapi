import { FETCHING_DATA, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  fetchError: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SUCCESS:
      return {
        // ...state,
        characters: action.payload
      }
    default:
      return state;
  }
};
