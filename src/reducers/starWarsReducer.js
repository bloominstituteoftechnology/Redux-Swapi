import {FETCHING, FETCHED, ERRORS} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  isFetching:false,
  isFetched:false,
  errors:null,
  chars:[]

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    
    case FETCHING:
    return { ...state, isFetching: true };
  case ERRORS:
    return { ...state, isFetching: false, error: action.payload };
  case FETCHED:
    console.log(action.payload);
    return {
      ...state,
      chars: action.payload,
      isFetching: false,
      isFetched: true
    };
  default:
    return state;
}
};