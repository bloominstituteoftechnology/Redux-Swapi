import { FETCHED, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: true,
  fetched: false,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED:
      return Object.assign({}, state, { chars: state.chars.concat(action.payload), fetching: false, fetched: true });

    case ERROR:
      state = action.payload;
      return state;
    
    default:
      return state;
  }
};
