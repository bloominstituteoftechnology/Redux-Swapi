import { SUCCESS, FAILURE, LOADING} from "../actions";

const initialState = {
  characters: [],
  loading: true,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case LOADING:
      return { 
        ...state,
        loading: true, 
        characters: [], 
        error: '' 
    }
    case SUCCESS:
      return { 
        ...state,
        loading: false,
        characters: action.payload, 
        error: '' 
      }
    case FAILURE:
      return { 
        ...state,
        loading: false,
        characters: [], 
        error: action.payload 
      }

    default:
      return state;
  }
};
