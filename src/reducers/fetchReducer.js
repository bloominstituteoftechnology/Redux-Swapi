import { FETCH_CHARS, FETCHED } from '../actions/index.js';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS: {
      return true;
    }
    case FETCHED: {
      return false;
    }
    default:
      return state;
  }
}