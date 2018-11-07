import { FETCHING, FETCHED, ERROR } from  "../actions/index";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return { ...state, fetching: true };
    case FETCHED:
    return { ...state, fetching: false, characters: action.payload };
    case ERROR:
    return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
