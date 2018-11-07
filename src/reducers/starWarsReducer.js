import { FETCHED_INFO, ERROR, LOADING } from "../actions";
const initialState = {
  characters: [],
  error: null,
  loading: false,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case LOADING:
      return { ...state, loading: true }

    case ERROR:
      return { ...state, error: action.payload, loading: false };
      
    case FETCHED_INFO:
      return Object.assign({}, state, {
        characters: action.payload,
        error: null,
        loading: false,
      });
    default:
      return state;
  }
};
