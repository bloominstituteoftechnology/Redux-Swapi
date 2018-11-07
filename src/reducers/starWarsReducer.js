import { FETCHING, ERROR, FETCHED } from "../actions";
const initialState = {fetching: false, error: '', characters: []
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
    return Object.assign({}, state, { fetching: true });

  case ERROR:
    return Object.assign({}, state, { fetching: false, error: action.error });

  case FETCHED: 
    return Object.assign({}, state, { fetching: false, characters: state.characters.concat(action.characters)});

    default:
      return state;
  }
};
