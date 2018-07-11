import /* we need our action types here*/ '../actions';
import { FETCHING, ERROR, FETCHED } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars:[],
  fetching:false,
  fetched:false,
  error:null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true};
    case FETCHED:
      return {...state, fetching:false, fetched:true, chars:state.chars.concat(action.payload)};
    case ERROR:
      return {...state, error: action.payload};
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
