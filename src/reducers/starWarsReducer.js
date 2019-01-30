import {FETCHING, FETCH_FAILURE, FETCH_SUCCESS} from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  fetching: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCHING): {
      console.log('loading');
      return {...state, error: '', fetching: true}
    };
    case(FETCH_SUCCESS): {
      console.log('success');
      return {...state, characters: action.payload, fetching: false, error: '' };
    };
    case(FETCH_FAILURE): {
      console.log('failure');
      return {...state, error: action.payload, fetching: false};
    };
    default:
      return state;
  };
};
