/* we need our action types here*/ "../actions";
import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
    return { ...state, 
      fetching: true
    }
    case FETCHING_CHARACTERS_FAILURE:
    return { ...state, 
      fetching: false, 
      error: action.payload 
    }
  case FETCHING_CHARACTERS_SUCCESS:
    return { ...state,
      characters: [...state.characters, ...action.payload],
      fetching: false
    }
    default:
      return state;
  }
};
