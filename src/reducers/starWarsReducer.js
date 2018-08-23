import {FETCHED, FETCHING, ERROR} from '../actions/index';
const initialState = {
  monkey: [],
  fetching: false,
  fetched: false,
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING:
    return {
      ...state,
      fetching: true,
      fetched: false,
    };
    case FETCHED:
    return {
      ...state,
      monkey: action.payload,
      fetched: true,
      fetching: false,
    }
    case ERROR:
    return {
      ...state,
      fetching: false,
      error: state.error,
    }
    default:
      return state;
  }
};
