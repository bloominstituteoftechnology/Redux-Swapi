import /* we need our action types here*/ { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FAILURE:
      return Object.assign({}, state, { error: action.payload, fetching: false});
    case SUCCESS:
      return Object.assign({}, state, { characters: action.payload, fetching: false});
    default:
      return state;
  }
};
