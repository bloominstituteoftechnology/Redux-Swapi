import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true }); // if we're fetching simply trigger the boolean!

    case FETCHED:
      return Object.assign({}, state, {
        chars: action.payload,
        fetching: false,
        fetched: true
      });

    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        error: "Error fetching data"
      });

    default:
      return state;
  }
};
