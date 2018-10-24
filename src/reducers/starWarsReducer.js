import {
  /* we need our action types here*/ FETCHING_STARWAR,
  FETCHING_STARWAR_SUCCESS,
  FETCHING_STARWAR_FAILURE
} from "../actions";
const initialState = {
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_STARWAR:
      return { ...state, isFetching: true };
    case FETCHING_STARWAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCHING_STARWAR_FAILURE:
      return {...state, isFetching:false, error:action.payload}
    default:
      return state;
  }
};
