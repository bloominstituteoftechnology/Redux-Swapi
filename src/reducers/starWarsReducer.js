import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_FAILURE,
  FETCHING_CHARACTERS_SUCCESS
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state, ...action.payload]
      };
    case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
