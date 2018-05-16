import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: true,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:      
      return Object.assign({}, state, { 
        // i might need "state.chars.concat", but i think that is only needed if some chars are alread in state
        chars: action.payload,
        fetching: false,
        fetched: true,
      });
    case ERROR:
      //not sure yet why i need this.  thinking i'll pass the error .catch
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
