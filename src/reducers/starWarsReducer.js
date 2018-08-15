import { FETCHING, IS_FETCHED, ERR_FETCHED } from '../actions';
import { Object } from 'core-js';

const initialState = {
  people: [],
  isFetching: false,
  isFetched: false,
  isError: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {isFetching: true});
    case IS_FETCHED:
      return Object.assign({}, state, {isFetching: false, isFetched: true}, {people: action.people});
    case ERR_FETCHED:
      return Object.assign({}, state, {isFetching: false, isError: true});
    default:
      return state;
  }
};
