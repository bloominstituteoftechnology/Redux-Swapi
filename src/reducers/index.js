import { FETCHED, FETCHING, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true}
    case FETCHED:
      return {...state, chars: action.chars, fetching: false, error: null };
    case ERROR:
      return {...state, error: action.errorMessage}
    default:
      return state
  }
}