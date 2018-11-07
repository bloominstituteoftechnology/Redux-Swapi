import { FETCHING_CHARS } from "../actions";
import { FETCH_SUCCESS } from "../actions";
import { FETCH_FAILED } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
    return {...state, fetching: true};
    case FETCH_SUCCESS:
    return {...state, characters: action.payload, fetching: false};
    case FETCH_FAILED:
    return {...state, error: action.payload}
    default:
      return state;
  }
};
