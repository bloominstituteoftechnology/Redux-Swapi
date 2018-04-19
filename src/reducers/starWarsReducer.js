import {FETCHING, FETCHED, ERRORS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
        return {...state, fetching: true};
      case 'FETCHED':
        return {
          ...state,
          chars: action.payload,
          fetching: false,
          fetched: true
      };
      case 'ERRORS':
        return {...state, fetching: false, error: action.payload};
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
