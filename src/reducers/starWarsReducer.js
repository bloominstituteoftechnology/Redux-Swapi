import { FETCHING_CHARS, CHARS_FETCH_SUCCESS, CHARS_FETCH_ERROR } from '../actions';

const initialState = {
  chars:[], fetching: true, error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCHING_CHARS:
    
      return Object.assign({}, state, {fetching: true});
    case CHARS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false
      });
    case CHARS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching chars'
      });
    default:
      return state;
  }
};
