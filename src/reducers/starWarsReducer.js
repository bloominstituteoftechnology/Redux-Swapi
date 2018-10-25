import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR
} from "../actions";
const initialState = {
  chars: [],
  gettingChars: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return Object.assign({}, state, { gettingChars: true });
    case GET_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        chars: action.payload,
        gettingChars: false
      });
    case GET_CHARACTERS_ERROR:
      return Object.assign({}, state, {
        gettingChars: false,
        error: "Error getting chars"
      });
    default:
      return state;
  }
};
