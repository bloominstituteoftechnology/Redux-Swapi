import {
  FETCHING_DATA,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR,
} from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetching: true };
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        chars: [...state.chars, ...action.payload],
        fetching: false,
      };
    case DATA_FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    default:
      return state;
  }
};
