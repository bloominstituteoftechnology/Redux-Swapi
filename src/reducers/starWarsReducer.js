import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
  fetching: false,
  characters: [],
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return { ...state, fetching: true };
    case FETCHING_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case FETCHING_CHARACTERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};
