import { SUCCESS, FAILURE, LOADING} from "../actions";

const initialState = {
  characters: [],
  loading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case LOADING:
      return { ...state, loading: true, dogs: [], error: '' }
    case SUCCESS:
      return { ...state, loading: false, dogs: action.payload, error: '' }
    case FAILURE:
      return { ...state, loading: false, dogs: [], error: action.payload }

    default:
      return state;
  }
};
