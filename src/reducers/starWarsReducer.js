import { FETCHING_DATA, LOAD_SUCCESS, LOAD_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING_DATA: {
      return {
        ...state,
        isLoading: true
      }
    }

    case LOAD_SUCCESS: {
      const newData = action.payload.results

      return {
        ...state,
        isLoading: false,
        characters: newData
      }
    }

    case LOAD_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    
    default:
      return state;
  }
};
