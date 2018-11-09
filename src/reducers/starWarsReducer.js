import { LOADING, ERROR, SUCCESS } from "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        error: "",
        loading: false
      });
    default:
      return state;
  }
};
