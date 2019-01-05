import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  characters: [],
  fecthing: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return {...state, fecthing: true};
    case SUCCESS: 
      return {...state, characters: action.payload, fecthing: false};
    case FAILURE: 
      return {...state, error: action.payload, fecthing: false}
    default:
      return state;
  }
};
