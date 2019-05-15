
import { CHAR_FETCH, CHAR_SUCCESS, CHAR_FAILURE} from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAR_FETCH:
    return {
      ...state, 
      fetching: true,
      error: ''
    }
    case CHAR_SUCCESS:
    return {
      ...state,
      fetching: false, 
      error:'', 
      characters: action.payload
    }
    case CHAR_FAILURE:
    return {
      ...state, 
      fetching: false, 
      error: action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
