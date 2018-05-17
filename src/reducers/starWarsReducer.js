import { CHARS_FETCHING, CHARS_FETCHED, CHARS_FETCH_ERROR } from '../actions'; /* we need our action types here*/

const initialState = {
  fetching: false, 
  fetched: false,
  chars: [], 
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) { 
    case "CHARS_FETCHING": { 
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