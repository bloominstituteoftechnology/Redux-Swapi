import { FETCHING, SUCCESS, FAILURE } from "../actions";
/* we need our action types here*/


const initialState = {
  characters: [],
  loading: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
        return {...previousState, loading: true };
    case SUCCESS:
        return Object.assign({}, previousState, {
          characters: action.payload,
          error: '',
          loading: false,
        })
    case FAILURE: 
        return {...previousState, error: action.payload, loading: false };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return previousState;
  }
};
