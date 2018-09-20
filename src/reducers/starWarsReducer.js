import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true});

    case FETCHED:
      return Object.assign({}, state, { chars: [...state.chars, ...action.payload], fetching: false });

    case ERROR:
      return Object.assign({}, state, { error: 'Sorry, we encountered an error.', fetching: false });

    default:
      return state;
  }
};
