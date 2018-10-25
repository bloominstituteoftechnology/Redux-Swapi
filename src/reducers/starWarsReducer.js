import { FETCH_PEOPLE, SUCCESS, FAILURE} from '../actions';

const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
 
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE: 
      return {...state, isFetching: true};
    case FAILURE:
      return {...state, isFetching: false, error: action.payload};
  
    case SUCCESS: 
      return {...state, characters:[...state.characters, ...action.payload], isFetching: false  }; 
    
    

    default:
      return state;
  }
};
