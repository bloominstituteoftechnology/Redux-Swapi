import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: true,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { fetching: true };
    case FETCHED:
      return { ...state, chars: action.payload, fetching: false };
    case ERROR:
      return { fetching: false, fetched: false, error: 'Error fetching chars' };
    default:
      return state;
  }
};
