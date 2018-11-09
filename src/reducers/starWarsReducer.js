import { FETCHING_CHARS, ERROR, SUCCESS } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case SUCCESS:
      return Object.assign({}, state, {
        dogs: action.payload,
        error: "",
        fetching: false
      });
    default:
      return state;
  }
};
