import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from "../actions";

const initialState = {
  characters: [],
  error: '',
  isLoading: false,
  starWars: null
  // Array characters, Boolean fetching, null error.
};
const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case FETCH_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "I..I...i dont even want to hear it. Erase whatever you put in WRONG, and try again!!!"
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

export default charsReducer;