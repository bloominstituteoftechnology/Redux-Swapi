//import /* we need our action types here*/ "../actions";
import { LOADING, ERROR, FETCHED_SUCCESS } from "../actions";
	
const initialState = {
  characters: [],
 loading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case LOADING:
    return { ...state, loading: true }
  case ERROR:
    return { ...state, error: action.payload, loading: false }
  case FETCHED_SUCCESS:
    return {
      ...state, characters: [...state.characters,...action.payload],
      loading: false
    }
    default:
      return state;
  }
};
