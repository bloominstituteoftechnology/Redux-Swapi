import {
  SUCCESS_GETTING_CHARACHTERS,
  GET_CHARACHTERS_ERROR,
  GETTING_CHARACHTERS
} from "../actions";

// define a few properties here.
// Array chars, Boolean fetching, Boolean fetched, null error.
const initialState = {
  charachters: [],
  fetchingCharachters: false,
  fetchedCharachters: false,
  error: "",
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case GETTING_CHARACHTERS:
      return { ...state.charachters, fetchingCharachters: true };
    case SUCCESS_GETTING_CHARACHTERS:
      return {...state, 
        charachters: action.payload,
        fetchingCharachters: false,
        fetchedCharachters: true
      };
    case GET_CHARACHTERS_ERROR:
      return Object.assign({}, state, {
        fetchingCharachters: false,
        error: "Error fetching charachters"
      });
    default:
      return state;
  }
};
