import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from "../actions/index";
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
        isFetching: true,
      }
    }

    case FETCHING_SUCCESS: {
      const newCharacter = action.payload.results

      return {
        ...state,
        isFetching: false,
        characters: newCharacter,
      }
    }

    case FETCHING_FAILED: {
      return {
        ...state,
        error: action.payload.message
      }
    }

    default:
      return state;
  }
};
