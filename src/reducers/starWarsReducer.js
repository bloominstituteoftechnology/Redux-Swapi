import { FETCHING, SUCCESS, ERROR } from "../actions/index";
import { CharacterList } from "../components";

const initialState = {
  characters: [{
    characters: '',
    fetching: true,
  }]
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetching: true});
    case SUCCESS: 
      return Object.assign({}, state, ...action,{fetching: false, error: ''})
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
