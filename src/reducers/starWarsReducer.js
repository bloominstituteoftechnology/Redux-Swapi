import { FETCHING_DATA, FETCHED_DATA } from '../actions';
const initialState = {
  chars: [],
  fetching: true,
  fetched: false
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_DATA: 
      return {
        ...state,
        fetching: true,
        fetched: false
      }
    case FETCHED_DATA:
      return {
        fetching: false,
        fetched: true,
        chars: action.payload
      }
    default:
      return state;
  }
};
