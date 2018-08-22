import { FETCHING, FETCHED, ERRORS } from '../actions';

const initialState = {
  chars: [],
  isFetching: false,
  isFetched: false,
  errors: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
