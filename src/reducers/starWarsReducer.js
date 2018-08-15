import { FETCH_REQUEST, FETCH_COMPLETE, FETCH_ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_COMPLETE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        chars: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
    default:
      return state;
  }
};
