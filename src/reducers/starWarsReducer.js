import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true
      })
    case FETCHED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        chars: action.payload
      })
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      })
      default:
        return state;
    }
  }
