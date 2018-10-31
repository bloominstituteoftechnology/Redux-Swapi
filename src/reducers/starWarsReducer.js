/* we need our action types here*/
import {
  FETCHING,
  SUCCESS,
  FAILURE,
} from "../actions";


const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state, 
        isFetching: true
      };
    
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case FAILURE:
      return {
        ...state, 
        isFetching: false, 
        error: action.payload
      }
    default:
      return state;
  }
};
