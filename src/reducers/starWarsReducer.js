import { FETCHING, SUCCESS, FAILURE } from "../actions/";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: action.payload
      };

    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
