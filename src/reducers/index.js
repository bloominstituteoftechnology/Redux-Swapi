import {
  GET_CHARS,
  FETCHING_CHARS,
  ERROR_FETCHING_CHARS
} from '../actions';

const initialState = {
  fetching: false,
  fetched: false,
  chars: [],
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return {...state, fetching: true};
    case ERROR_FETCHING_CHARS:
      return {...state, fetching: false, error: action.payload };
    case GET_CHARS:
      console.log(action.payload);
      return {
        ...state,
        chars: action.payload,
        fetching: false,
        fetched: true
      };
      default:
        return state;  
  }
};