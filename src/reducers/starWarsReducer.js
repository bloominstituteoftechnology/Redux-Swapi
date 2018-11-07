import { FETCHING, ERROR, SUCCESS }  from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  loading: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...state, loading: true};    
    case SUCCESS:
      return {
        ...state,   
        loading: false,
        characters: [...state.characters, ...action.payload],
        error: null
      };
    case ERROR:
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
};
