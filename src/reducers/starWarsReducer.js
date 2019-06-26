import /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  FETCHING: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return Object.assign({}, state, {FETCHING: true});

    case "SUCCESS":
      return Object.assign({}, state, {characters: action.payload, FETCHING: false, error: '',})

    case "FAILURE":
      return Object.assign({}, state, {FETCHING: false, error: action.payload})




    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
