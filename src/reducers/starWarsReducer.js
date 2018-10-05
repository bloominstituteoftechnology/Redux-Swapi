import { FETCHING, FETCHED, ERRORS } from '../actions';
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  characters: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, fetching: true };
    case 'FETCHED':
      return { ...state, 
        characters: action.payload,
        fetching: false,
        fetched: true
      };
    case 'ERRORS':
      return { ...state, 
        fetching: false,
        error: 'problem fetching chars data'
      };
    default:
      return state;
  }
};
