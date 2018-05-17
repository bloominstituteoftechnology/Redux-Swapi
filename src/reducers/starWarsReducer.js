import { FETCH_DATA, FETCHING_DATA, ERROR_FETCHING } from '../actions';

export const charsReducer = (state = { chars: [], fetching: false}, action) => {
  switch (action.type) {
    case FETCH_DATA:
    return Object.assign({}, state, {chars: state.chars.concat(action.payload), fetching: false})
    case FETCHING_DATA:
    return Object.assign({}, state, {fetching: true});
    case ERROR_FETCHING:
    return Object.assign({}, state, {chars: action.error, fetching: false});
    default:
      return state;
  }
};
