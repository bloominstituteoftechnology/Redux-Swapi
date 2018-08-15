import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  chars: [],
  isFetching: false,
  isFetched: false,
  err: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return Object.assign({}, ...state, { isFetching: true });
    case FETCH_SUCCESS:
      return Object.assign({}, ...state, {
        chars: action.payload,
        isFetching: false, 
        isFetched: true 
      });
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };
    default:
      return state;
  }
};
