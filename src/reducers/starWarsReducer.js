import {FETCH_SW_CHARS_START, FETCH_SW_CHARS_SUCCESS, FETCH_SW_CHARS_FAILURE} from  "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SW_CHARS_START:
    return {
      ...state,
      fetching:true,
      error:null
    }

  case FETCH_SW_CHARS_SUCCESS:
    return {
      ...state,
      characters: action.payload,
      fetching:false,
      error:null
    }

  case FETCH_SW_CHARS_FAILURE:
    return {
      ...state,
      fetching:false,
      error:action.payload
    }

    default:
      return state;
  }
};
