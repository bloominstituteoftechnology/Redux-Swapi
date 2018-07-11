import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  chars: [],
  dataPending: false,
  dataSuccess: false,
  dataFailure: false,
  returnNull: 'error'
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {dataPending: true})
    case FETCH_SUCCESS:
      return Object.assign({}, state, {dataPending: false, dataSuccess: true, chars: action.payload})
    case FETCH_FAILURE:
      return Object.assign({}, state, {dataPending: false, dataFailure: true})
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
