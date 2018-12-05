import { FETCHING, SUCCESS,FAILURE } from "../actions";

const initialState = {
  characters: [],
  loading: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: return {...prevState, loading: true};
    case SUCCESS: return {...prevState, characters: action.payload, loading: false}
    case FAILURE: return {...prevState, loading: false, error: action.payload}
    default:
      return prevState;
  }
};
