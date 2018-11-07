import {FETCHING, SUCCESS, FAILURE} from/* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: [],
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, loading: true};
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        error: "",
        fetching: false
      });
    case FAILURE:
      return {...state, error: action.payload, loading: false}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
