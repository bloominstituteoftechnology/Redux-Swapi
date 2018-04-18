import { FETCHING, FETCHED, ERROS } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetching: false,
  fatched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {...state, fetching: true};


    case 'FETCHED':
      return {...state, fatched: true, c }


    case 'ERRORS':
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
