import { IS_FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  characters: [],
  fetching: false,
  fetched: false,
  error: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
  case IS_FETCHING:
    return Object.assign({}, state, { fetching: true });

  case FETCHED:
    return Object.assign({}, state, {
      characters: [...state.characters, ...action.payload],
      fetching: false,
      fetched: true
    });

  case ERROR:
    return Object.assign({}, state, {
      fetching:false,
      error: "Error"
    });
    
    default:
      return state;
  }
};
