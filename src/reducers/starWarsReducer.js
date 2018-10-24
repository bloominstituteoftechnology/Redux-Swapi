import { FETCHING_CHARS, FETCHING_CHARS_SUCCESS, FETCHING_CHARS_FAILURE } from '../actions';
const initialState = {
  chars: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, isFetching: true };
    case FETCHING_CHARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        chars: [...state.chars, ...action.payload]
      };
    case FETCHING_CHARS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
