import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  error: '',
  loading: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {loading: true});
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        error: '',
        loading: false
      });
    case FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      });
    default:
      return state;
  }
};
