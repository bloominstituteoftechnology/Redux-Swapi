import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from"../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state, ...action.payload],
        isFetching: false,
      };

      case FETCH_CHARACTERS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
      
    default:
      return state;
  }
};
