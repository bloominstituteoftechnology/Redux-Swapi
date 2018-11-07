import { SUCCESS, FAILURE, FETCHING} from "../actions/index";
const initialState = {
  characters: [],
  fetching: true,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAILURE:
      return { ...previousState, error: action.payload};

      
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
