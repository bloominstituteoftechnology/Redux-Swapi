import /* we need our action types here*/ '../actions';
import { FETCH_CHARACTERS, SUCCESS, FAILURE } from '../actions';
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS: {
      newState.fetching = true;
      break;
    }
    case SUCCESS: {
      newState.characters = action.characters;
      newState.fetching = false;
      newState.error = null;
      break;
    }
    case FAILURE: {
      newState.fetching = false;
      newState.error = action.error;
      break;
    }
  }
  return newState;
};
