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
      console.log("suc", action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        dataLoading: false,
        dataLoaded: true
      };
    case FAILURE:
      return { ...state, dataLoaded: false };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
