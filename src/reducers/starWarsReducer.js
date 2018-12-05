import { FAILURE, SUCCESS, FETCHING } from "../actions";

const initialState = {
  chars: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        chars: [...state.chars, ...action.payload],
        fetching: false,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
