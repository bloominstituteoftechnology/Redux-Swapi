import {
  FETCHING,
  SUCCESS,
  FAILURE
} from /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  dataLoaded: false,
  dataLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, dataLoading: true };
    case SUCCESS:
      return { ...state, dataLoading: false, dataLoaded: true };
    case FAILURE:
      return { ...state };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
