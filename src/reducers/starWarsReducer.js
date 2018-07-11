import { FETCHING, FETCHED, ERROR } from '../actions';
// import { REFUSED } from 'dns';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false, 
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      // return {...state, fetching: true };
      return Object.assign({}, state, { fetching: true })
    case FETCHED:
      console.log('fetched reducer: ', action.payload)
      return {...state, chars: action.payload, fetched: true, fetching: false };
    case ERROR:
      // return {...state, error: action.payload }
      return Object.assign({}, state, { error: action.error })
    default:
      return state;
  }
};

// Fill me in with the important reducers
// action types should be FETCHING, FETCHED, and ERROR
// your switch statement should handle all of these cases.