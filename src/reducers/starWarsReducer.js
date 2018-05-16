import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  starWarsChar: [],
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED:
      let newArray = [];
      newArray.concat(action.payload);
      let newObj = Object.assign({}, state, {starWarsChar: newArray});
      return newObj;
    case ERROR:
      return Object.assign({}, state, {error: action.error});
    default:
      return state;
  }
};
