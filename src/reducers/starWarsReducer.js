import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  chars: [],
  isFetching: false,
  isFetched: false,
  err: null
};

export const charsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        chars: payload,
        isFetching: false,
        isFetched: true
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: payload
      };
    default:
      return state;
  }
};
