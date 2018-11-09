// import /* we need our action types here*/ "../actions";
import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return Object.assign({}, state, {fetching: true});

    case FETCH_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {characters: [...state.characters, ...action.payload], fetching: false});

    case FETCH_CHARACTERS_FAILURE:
      return Object.assign({}, state, {fetching: false, error: action.payload});
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
