import {FETCHING, SUCCESS, FAILURE} from "../actions";


const initialState = {
  characters: [],
  fetching : false,
  error : '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching : true}
     case SUCCESS:
      return Object.assign({}, state, {
        characters : action.payload,
        fetching : false,
        error : '',
      })
    case FAILURE:
      return {...state, error : action.payload, fetching: false}  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
