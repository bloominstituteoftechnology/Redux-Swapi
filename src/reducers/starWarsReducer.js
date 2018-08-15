import {FETCHING, FETCHED, ERROR} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return [...state, {
      loading: true
    }]

    case FETCHED:
    return [...state, {
      chars: action.payload,
      loading: false
    }]

    case ERROR:
    return action.error;

    default:
      return state;
  }
};
