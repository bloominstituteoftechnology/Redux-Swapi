import {fetching} from "../actions";
import {SUCCESS, FAILURE, FETCHING} from '../actions'


const initialState = {
  characters: [],
  isLoggedin: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SUCCESS: 
    return {
      ...state,
      isLoading: false,
      error: '',
      characters: action.payload
      
    }
    case FAILURE: 
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
    case FETCHING: 
      return {
        ...state,
        isloading: true,
        error: action.payload
      }
    default:
      return state;
  }
};
