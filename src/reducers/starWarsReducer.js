import /* we need our action types here*/ {FETCHED_ACTION, FETCHING_ACTION, ERROR_ACTION} from '../actions';


const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

  const initialState = {
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
    case FETCHING_ACTION:
    return {}
    default:
      return state;
  }
};
