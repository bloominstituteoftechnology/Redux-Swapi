import { FETCHING, FETCHED, ERROR } '../actions';
const initialState = {
  chars: [],
  isFetching: false,
  hasFetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        hasFetched: false
      };
    case FETCHED:
      return{
        ...state,
        isFetching: false,
        hasFetched: true,
        chars: action.payload
      }
    case ERROR:
      return {
        ...state,
        isFetching: false,
        hasFetched: false,
        error: action.payload
      }
    default:
      return state;
  }
};
