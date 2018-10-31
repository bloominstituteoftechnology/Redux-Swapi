// import "../actions";
import  { FETCHING, SUCCESS, FAILURE} from '../actions';

const initialState = {
// Array chars, Boolean fetching, null error.
  characters: [],
  isFetching: true,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {isFetching: true});
    case SUCCESS: 
      return Object.assign({}, state,  {isFetching: false, starWarsChar: state.starWarsChar.concat(action.payload)});
    case FAILURE: 
      return Object.assign({}, state, {error: action.error})
      default:
      return state;
  }
};
