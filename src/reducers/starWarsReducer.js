import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  loading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...previousState, loading: true};
    case SUCCESS:
      return {...previousState, loading: false, error: action.payload};
    case FAILURE:
      return {...previousState, loading: false, error: '', characters: action.payload};
    default:
      return state;
  }
};
