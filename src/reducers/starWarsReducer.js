import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS,FETCH_CHARACTER_FAILURE} from "../actions";
const initialState = {
  characters: [],
  err:'',
  isfetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_CHARACTER_START:
    return{
      ... state,
      err: '',
      isfetching: true
    }
    case FETCH_CHARACTER_SUCCESS:
    return{
      ...state,
      err: '',
      isfetching: false,
      characters: action.payload
    }
    case FETCH_CHARACTER_FAILURE:
    default:
      return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    
  }
};
