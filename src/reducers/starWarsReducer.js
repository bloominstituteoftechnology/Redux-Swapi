import {FETCHING,FETCHED,ERROR} from/* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  fetching:false,
  error:null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching:true}
    case FETCHED:
      return {...state, characters: action.payload, fetching:false, error:null}
    case ERROR:
      return{...state, error:action.errorMessage}

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
