import {FETCHING, FETCHED, ERROR} from  '../actions';




const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  char: [],
  fetching: false,
  error: null,
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return Object.assign({}, state, { fetching: true });

  case FETCHED:
    return Object.assign({}, state, { chars: action.payload, fetching: false, fetched: true });

  case ERROR:
    return Object.assign({}, state, { error: action.payload });
  default:
    return state;
  }
};