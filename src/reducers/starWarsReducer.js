import { FETCHING, FETCHED, ERRORS } from '../actions';
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  characters: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, fetching: true };
    case 'FETCHED':
      return { ...state, };
    case 'ERRORS':
    default:
      return state;
  }
};
