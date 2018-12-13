import { LOADING, ERROR, FETCHED_SUCCESS } from "../actions";

const initialState = {
  characters: [],
  loading: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case FETCHED_SUCCESS:
      return {
        ...state, characters: [...state.characters,...action.payload],
        loading: false
      }
    default:
      return state;
  }
};