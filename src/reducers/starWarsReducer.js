import /* we need our action types here*/ '../actions';
const initialState = { 
  characters: [], 
  isFetching: false, 
  error: null 
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return {...state, isFetching:true};
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case FETCHING_CHARACTERS_FAILURE:
      return {...state, isFetching: false, error: action.payload}

    default:
      return state;
  }
};
