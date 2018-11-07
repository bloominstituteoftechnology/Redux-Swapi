import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        isFetching: false,
        error: '',
      });
    case FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload,
      });
    default:
      return state;
  }
};
