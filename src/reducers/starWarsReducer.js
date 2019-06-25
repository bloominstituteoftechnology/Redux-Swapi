import { FETCH_CHAR_REQUEST, FETCH_CHAR_SUCCESS, FETCH_CHAR_FAILURE} from "../actions";
const initialState = {
  characters: [],
  error: null,
  fetching: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH_CHAR_REQUEST:
    return {
      ...state, fetching:true
    }
    case FETCH_CHAR_SUCCESS:
    return {
      ...state, error: null, fetching: false, characters: action.payload
    }
    case FETCH_CHAR_FAILURE:
    return {
      ...state, error: action.payload, fetching:false
    }
    default:
      return state;
  }
};
