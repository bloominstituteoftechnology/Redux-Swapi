
import {
  FETCHING,
  FETCHING_CHAR_SUCCESS,
  FETCHING_CHAR_FAILURE
} from '../actions/';


const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.

  characters :[],
  isFetching : true,
  error : null
};
export const charsReducer = (state = initialState, action) => {

  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
      return { ...state, isFetching: true };

      case FETCHING_CHAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload
        //  [...state.characters, ...action.payload]
      };  

      case FETCHING_CHAR_FAILURE:
      return { 
          ...state, 
          isFetching: false, 
          error: action.payload 
        };


    default:
      return state;
  }
};
