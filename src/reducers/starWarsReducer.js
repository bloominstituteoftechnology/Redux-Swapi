import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  error: "",
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return { ...state, fetching: true };
    case FAILURE:
      return {...state, error: action.payload, loading: false};
    case SUCCESS:
      //something goes here...
    
      // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
