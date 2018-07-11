import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  dataSuccess: false,
  dataFailure: false,

};
export const charsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return Object.assign({}, state, {fetching: true})
    case FETCH_SUCCESS:
      return Object.assign({}, state, {fetching: false, dataSuccess: true, chars: payload})
    case FETCH_FAILURE:
      return Object.assign({}, state, {fetching: false, dataFailure: true})
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
