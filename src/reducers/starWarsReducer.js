import {LOADING, ERROR, SUCCESS} from "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: ''
  
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING: 
    return {...state, loading: true};
    case ERROR:
    return {...state, error: action.payload, loading: false};
    case SUCCESS:
    return {...state, characters: action.payload, loading: false}
    
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
