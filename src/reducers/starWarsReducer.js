import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING :
      return {...state, characters: [], loading: true };
    case SUCCESS :
      return {...state, characters: action.payload, loading: false };
    case FAILURE :
      return {...state, error: action.payload, characters: [], loading: false };
    default:
      return state;
  }
};
