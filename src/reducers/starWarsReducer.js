import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  chars: [];
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return object.assign({}, state, { fetching: true });
    case FETCHED: 
    return Object.assign({}, state, { chars: [...state.chars, ...action.chars], fetching: false });
    case ERROR:
    return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};
