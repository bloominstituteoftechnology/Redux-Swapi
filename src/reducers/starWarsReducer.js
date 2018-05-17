import {FETCH_AVENGERS, FETCHING_AVENGERS } from  '../actions';
const initialState = {
   avengers: [],
   fetching: false 
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_AVENGERS:
      return Object.assign({}, state, {
        avengers: state.avengers.concat(action.payload),
        fetching: false
      });
    case FETCHING_AVENGERS:
      return Object.assign({}, state, { fetching: true });
    default:
      return state;
  }
};
