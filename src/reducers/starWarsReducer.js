import { FETCHING, GET_CHARS, ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true};
    case GET_CHARS:
      return {...state, fetching: false, fetched: true, chars: action.payload};
    case ERROR:
      return {...state, error: action.payload};
    default:
    console.log('state ', state);
      return state;
  }
};
