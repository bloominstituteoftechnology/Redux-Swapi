import { FETCH_CHARACTERS, SUCCESS, FAIL } from "../actions";
const initialState = {
  fetching: false,
  characters: [],
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, fetching: true };
    case FAIL:
      return { ...state, fetching: false, error: action.payload };
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    default:
      return state;
  }
};
