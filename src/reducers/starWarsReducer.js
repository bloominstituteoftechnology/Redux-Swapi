// import * as F_Options from '../actions/index'; 
import { FETCHING, FETCHED, FETCHED_ERR, } from '../actions';
const initialState = {
  chars: [],
  error: null,
  fetching: false,
  fetched: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars,...action.payload],
        fetching: false,
        fetched: true,
      });
    case FETCHED_ERR:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        error: action.payload
      
      });
    default:
      return state;  
  }
};
