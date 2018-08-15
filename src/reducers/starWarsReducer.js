import {FETCHING, FETCHED, ERRORS} from '../actions';

const initialState = {
  chars: [],
  isFetching: false,
  isFetched : false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
        });
    case FETCHED:
      return Object.assign({}, state, {
        isFetching: false,
        isFetched: true
        });
    case ERRORS:
      return Object.assign({}, state, {
        isFetching: false,
        error: state.error
        });
    default:
      return state;
  }
};
