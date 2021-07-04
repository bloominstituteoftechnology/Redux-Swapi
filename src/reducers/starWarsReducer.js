import { FETCH_CHARS, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH_CHARS:
      return {...state, fetching: true};

    case FETCH_SUCCESS:
      return {...state, fetching: false, characters: action.payload};

    case FETCH_FAILURE:
      return {...state, error: true}

    default:
      return state;
  }
};
