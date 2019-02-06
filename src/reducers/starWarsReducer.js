import { FETCHING, SUCCESS,  FAILED } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  err: ""
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  console.log('state is', state)
  switch (action.type) {
    case FETCHING: 
      return {
          ...state,
          characters: [],
          isFetching: true,
          error: ""
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      }
    case FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};


  // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.