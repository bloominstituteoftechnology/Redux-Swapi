import { FETCHING_CHAR, FETCHED_CHAR ,ERROR_FETCHING_CHAR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  fetching : false,
  fetched : false,
  chars : [],
  error :null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should import { FETCHED_CHAR } from '../actions/index';
    case FETCHING_CHAR :
          return {...state, fetching : true };
    case FETCHED_CHAR:
          return {...state, chars : action.payload, fetching : false}
    // your switch statement should handle all of these cases.
    case ERROR_FETCHING_CHAR :
          return {...state, fetching : false , error : action.payload}
    default:
      return state;
  }
};
