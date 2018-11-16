import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: "",
  // Array characters, Boolean fetching, null error.
};
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, loading: true};
    case FAILURE: 
      return {...state, error: action.payload, loading: false}
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        error: "",
        loading: false,
      })
    default:
      return state;
  }
};
