import { FETCHING_PEOPLE, SUCCESS, FAILURE} from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  chars: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_PEOPLE: 
      return {...state, isFetching: true};
  
    case SUCCESS: 
      return {...state, isFetching: false, chars:[...state.chars, ...action.payload] } 
    
    case FAILURE:
      return {...state, isFetching: false, error: action.payload}

    default:
      return state;
  }
};
