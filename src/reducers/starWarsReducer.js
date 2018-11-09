import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        fetching: false,
        error: null
      })
    case FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};
