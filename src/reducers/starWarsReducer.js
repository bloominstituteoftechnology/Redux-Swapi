import /* we need our action types here*/ "../actions";

import{
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SEND_REQUEST:
    return {
      ...state,
      fetching: true
    }
  case REQUEST_SUCCESS:
    return {
      ...state,
      characters: action.payload,
      error: null,
      fetching: false
    }
  case REQUEST_FAIL:
    return {
      ...state,
      error: action.payload,
      fetching: false
    }
    default:
      return state;
  }
};
