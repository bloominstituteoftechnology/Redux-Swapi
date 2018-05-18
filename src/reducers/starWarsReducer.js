import {FETCH_PEOPLE} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

};
export const charsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
    return state.concat(action.payload);
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
