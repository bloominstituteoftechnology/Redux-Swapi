import {FETCH_REQUEST, FETCHED, FETCH_ERROR} from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCH_REQUEST:
    return{
      ...state,
      fetching:true
    }
    case FETCHED:
    return{
      ...state,
      fetching: false,
      fetched: true,
      chars: action.payload
    }
    case FETCH_ERROR:
    return{
      ...state,
      fetching: false,
      fetched: false,
      chars: action.payload
    }
    default:
      return state;
  }
};
