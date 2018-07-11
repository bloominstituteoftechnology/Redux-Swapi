import {FETCHING,FETCHED,ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true};
    case FETCHED:
      return {...state, fetching: false, fetched: true, chars: action.payload};
    case ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
