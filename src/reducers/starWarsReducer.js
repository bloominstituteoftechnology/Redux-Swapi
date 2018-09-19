/* we need our action types here*/
import { FETCHING, FETCHED, FETCH_ERROR } from '../actions/';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [{name: "Jean Luc Picard"}],
  fetching: false,
  fetched: false,
  fetchError: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return {...state, fetching: true};
    case FETCHED: 
      return {...state, fetching: false, fetched: true, chars: [...state.chars, ...action.payload]};
    case FETCH_ERROR: 
      return {...state, fetching: false, fetchError: action.payload};
    default:
      return state;
  }
};
