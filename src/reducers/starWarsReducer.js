import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true, characters: [], error: "" };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        error: "",
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        characters: [],
        error: action.payload
      };
    default:
      return state;
  }
};
