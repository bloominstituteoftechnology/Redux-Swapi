import { FETCHING, ERROR_FETCHING, FETCHED } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
    // es syntax
    return { ...state, fetching: true };
    // ES6
    // return Object.assign({}, ...state, {fetching: true});
    case ERROR_FETCHING:
    // es syntax
    return {...state, fetching: false, error: action.payload};
    // ES6
    // return Object.assign({}, ...state, {fetching: false}, {error: action.payload})
    case FETCHED:
    // es syntax
    return {...state, chars: action.payload, fetching: false, fetched: true};
    // ES6
    // return Object.assign({}, ...state, {chars:action.payload}, {fetching: false}, {fetched: true})
    default:
      return state;
  }
};

