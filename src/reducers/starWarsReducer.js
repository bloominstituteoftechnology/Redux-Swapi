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
      return Object.assign( {}, state, { fetching: true } );
    case FETCHED:
      console.log(action.payload);
      return Object.assign( {}, state, { fetched: true, fetching: false, chars: action.payload } );
    case ERROR:
      return Object.assign( {}, state, { fetched: false, fetching: false, error: action.payload } );
    default:
      return state;
  }
};
