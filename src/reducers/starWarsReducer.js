import { LOADING, ERROR, FETCHED_CHARS } from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case LOADING:
     return { ...state, loading: true };
   case ERROR:
     return { ...state, error: action.payload, loading: false };
   case FETCHED_CHARS:
     return Object.assign({}, state, {
       dogs: action.payload,
       error: "",
       loading: false
     });

    default:
      return state;
  }
};
