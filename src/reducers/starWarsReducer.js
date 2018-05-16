// import /* we need our action types here*/ '../actions';
import { FETCH_SWAPI, FETCHING_SWAPI, ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [], fetching: false, error: null
};

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWAPI:
      return Object.assign({}, state, {
        chars: state.chars.concat(action.payload),
        fetching: false
      } );
    case FETCHING_SWAPI:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, {error: action.payload} )
    default:
      return state;
  }
};
