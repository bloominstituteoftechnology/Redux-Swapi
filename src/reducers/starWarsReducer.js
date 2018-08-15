import { FETCHING } from "../actions";
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  isFetching: false,
  isFetched: false,
  hasError: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      // return Object.assign({}, state, {
      //   ...state,
      //   isFetching: true,
      //   isFetched: false
      // });
      //same as above, using object spread syntax
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    default:
      return state;
  }
};
