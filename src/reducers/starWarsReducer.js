<<<<<<< HEAD
import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR
} from "../actions";
const initialState = {
  chars: [],
  gettingChars: false,
  error: null
=======
import /* we need our action types here*/ "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
>>>>>>> 8f9d32cbac00644036daa58a0375eaf72bd345fe
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
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
=======
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
>>>>>>> 8f9d32cbac00644036daa58a0375eaf72bd345fe
    default:
      return state;
  }
};
