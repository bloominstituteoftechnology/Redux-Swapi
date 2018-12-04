import { FETCHING, SUCCESS, ERROR } from "../actions";

const initialState = {
  chars: [],
  error: null,
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        chars: [...state.chars, ...action.payload]
      };
    default:
      return state;
  }
};
