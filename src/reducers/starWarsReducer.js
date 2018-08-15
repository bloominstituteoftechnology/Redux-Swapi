import { CHARS_FETCHING, CHARS_FETCHED, CHARS_FETCH_ERROR } from '../actions'; /* we need our action types here*/

const initialState = {
  fetching: false, // define a few properties here.
  fetched: false,
  chars: [], // Array chars, Boolean fetching, Boolean fetched, null error.
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) { // Fill me in with the important reducers // action types should be FETCHING, FETCHED, and ERROR
    case "CHARS_FETCHING": { // your switch statement should handle all of these cases.
      return {...state, fetching: true}
    }
    case "CHARS_FETCHED": {
      return {
        ...state,
        fetching: false,
        fetched: true, 
        chars: action.payload,
      }
    }
    case "CHARS_FETCH_ERROR": {
      return {...state, fetching: false, error: action.payload}
    }
    
    default:
      return state;
  }
};
