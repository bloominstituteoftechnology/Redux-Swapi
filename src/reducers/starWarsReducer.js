import { 
  FETCHING_CHARS,
  CHARS_FETCHED,
  ERROR_FETCHING_CHARS 
} from '../actions';
 // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  chars:[],
  error: null,
  fetching: false,
  fetched: false
  
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
      case FETCHING_CHARS:
        return Object.assign({}, state,{fetching:true});
     
      case ERROR_FETCHING_CHARS: 
        return Object.assign({}, state,{fetching: false,
        error:action.payload
      });
      case CHARS_FETCHED:
      return Object.assign({},state,{
        chars:[...state.chars, ...action.payload],
        fetching:false,
        fetched: true
      });
    default:
      return state;
  }
};
