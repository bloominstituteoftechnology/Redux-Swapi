import {
  FETCHING,
  SUCCESS,
  FAILURE
} from "../actions"; /* we need our action types here*/

const initialState = {
  characters: [],
  fetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        fetching: false
      });
    case FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching Characters"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
