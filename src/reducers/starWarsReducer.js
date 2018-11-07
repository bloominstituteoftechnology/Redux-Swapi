import GET_CHARACTERS from "../actions";
import GET_CHARACTERS_SUCCESS from "../actions";
import GET_CHARACTERS_FAILURE from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };

    case GET_CHARACTERS_SUCCESS:
      console.log("in the get characters success", state)
           return { ...state, Characters: [...state.characters, ...action.payload], fetching: false };

    case GET_CHARACTERS_FAILURE:
    console.log("getchararcterfailure")
      console.log(action.payload);
           return { ...state, fetching: false, error: action.payload };
    

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};


export default charsReducer;