import {SWAPI_FETCH_IN_PROGRESS, SWAPI_FETCH_SUCCESSFUL, SWAPI_FETCH_FAILURE} from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAPI_FETCH_IN_PROGRESS:
      return Object.assign({}, state, {fetching: true});
    case SWAPI_FETCH_SUCCESSFUL:
      return Object.assign({}, state, {chars: [...state.chars, ...action.payload], fetching: false});
    case SWAPI_FETCH_FAILURE:
      return Object.assign({}, state, {fetching: false, fetched: false, error: action.payload});
    default:
      return state;
  }
};
