import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR
} from "../actions";
const initialState = {
  chars: [],
  gettingChars: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, gettingChars: true };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        gettingChars: false,
        chars: [...state.chars, ...action.payload]
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        gettingChars: false,
        error: action.payload
      };
    default:
      return state;
  }
};
