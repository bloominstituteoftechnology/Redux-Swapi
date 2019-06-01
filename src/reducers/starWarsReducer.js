// import {/* we need our action types here*/} "../actions";
import {FETCHING, SUCCESS, ERROR} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return Object.assign({}, state, {fetching: true, characters: [], error:""})
    case SUCCESS: 
      return {...state, fetching: false, characters: action.payload, error:""}
    case ERROR: 
    return {...state, fetching: false, characters: [], error: action.payload}
    default:
      return state;
  }
};
