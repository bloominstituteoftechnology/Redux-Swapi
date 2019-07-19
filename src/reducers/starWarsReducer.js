import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      return {
        ...state,
        fetching: true,
        error: null,
      }
    }

    case FETCHING_SUCCESS: {
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null,
      }
    }

    case FETCHING_FAILED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

    default:
      return state;
  }
};
