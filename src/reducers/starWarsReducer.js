import { FETCHING, SUCCESS, FAILURE } "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: 'There was an error!'
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {}
    case SUCCESSS:
      return {}
    case FAILURE:
      return {}
    default:
      return state;
  }
};
