/*
import  we need our action types here { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      break;
    case SUCCESS:
      break;
    case FAILURE:
      break;
    default:
      return state;
  }
};
*/

//ADDED CODE

// import our defined action types from the action file
import { LOADING, ERROR, FETCHED_DOGS } from "../actions/dogsActions";

// define an initial state
const initialState = {
  dogs: [],
  error: "",
  loading: false,
  breed: ""
};

// The reducer. Redux will always pass two value to the reducer
// #1. The previous (or current) state. On initialization this will be 'undefined' allowing us to defaul to our initial state
// #2. The action. This will be the action returned to dispatch.
export default (previousState = initialState, action) => {
  switch (action.type) {
    // In our swqitch statement we act on the state dependent on the action type.
    case LOADING:
      return { ...previousState, loading: true };
    case ERROR:
      return { ...previousState, error: action.payload, loading: false };
    case FETCHED_DOGS:
      return Object.assign({}, previousState, {
        dogs: action.payload,
        error: "",
        loading: false
      });
    // Always default to returning the state as it is.
    default:
      return previousState;
  }
};
