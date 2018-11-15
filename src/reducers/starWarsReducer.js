import {
  FETCHING,
  SUCCESS,
  FAILURE
} from "../actions"; /* we need our action types here*/

const initialState = {
  characters: [],
  fetchingCharacters: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetchingCharacters: true });
    case SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        fetchingCharacters: false
      });
    case FAILURE:
      return Object.assign({}, state, {
        fetchingCharacters: false,
        error: "Error fetching Characters"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
