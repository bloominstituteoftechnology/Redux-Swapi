import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      // return { ...state, fetching: true };
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      // return {
      //   ...state,
      //   chars: action.payload,
      //   fetching: false,
      //   fetched: true
      // };
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false,
        fetched: true
      });
    case ERROR:
      // return { ...state, fetching: false, error: action.payload };
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching characters"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
