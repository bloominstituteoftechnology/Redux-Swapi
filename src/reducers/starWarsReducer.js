import {
  FETCHING,
  FETCHED,
  ERROR
} from '../actions';

const initialState = {
  isFetched: false,
  isFetching: false,
  // user: null;
  errors: [],
  hasErrors: false,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true,
      });

    case ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errors: [...state.errors, ...action.payload.errors],
        hasErrors: true;
      });

    default:
      return state;
  }
};
