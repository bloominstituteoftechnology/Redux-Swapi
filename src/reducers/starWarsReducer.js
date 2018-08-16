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
    return Object.assign({}, state,{
      isFetching: true
    } )
    case FETCHED: 
    return Object.assign({}, state,{
      isFetched: false
    })
    case ERRORS: 
    return Object.assign({}, state, {
      errors: null
    })
    default:
      return state;
  }
};
