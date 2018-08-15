import { REQUEST_FETCHING, REQUEST_SUCCESS, REQUEST_FAILURE } from '../actions';
import { Object } from 'core-js';

const initialState = {
  characters: [],
  isFetching: false,
  fetched: false,
  errors: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case REQUEST_FETCHING:
      return Object.assign({}, state, {isFetching: true} );
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        fetched: true,
        isFetching: false,
        characters: action.payload
      });
    case REQUEST_FAILURE:
      return Object.assign({}, state, {
        fetched: false,
        isFetching: false,
        errors: [...state.errors, action.payload.errors]
      })
    default:
      return state;
  }
};
