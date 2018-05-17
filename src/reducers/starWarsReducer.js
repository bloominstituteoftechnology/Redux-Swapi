import { FETCHED, FETCHING, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true};
    case FETCHED:
      return {...state, fetching: false, fetched: true, chars: state.chars.concat(action.payload)};
    case ERROR:
      return {...state, error: action.payload}; 
    default:
      return state;
  }
};
