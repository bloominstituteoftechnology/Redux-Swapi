import { FETCHED, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: true,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED:
      return Object.assign({}, state, { chars: state.chars.concat(action.payload), fetching: false });

    case ERROR:
      state = action.payload;
      return state;
    
    default:
      return state;
  }
};
