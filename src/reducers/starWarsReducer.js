import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return {...state, loading: true} 
    case SUCCESS:
      return {...state, characters: action.payload, loading: false}
    case FAILURE:
      return {...state, error: action.payload}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};