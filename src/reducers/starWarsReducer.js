import {FETCHING, SUCCESS, ERROR} from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: " "

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    case FETCHING:
      return {...state, fetching: true}
    // action types should be FETCHING, SUCCESS and FAILURE
    case ERROR:
      return { ...state, error: action.payload, fetching:false}
    // your switch statement should handle all of these cases.
    case SUCCESS:
       return Object.assign({}, state, { 
          characters: action.payload,
          fetching:false,
          error: ""
       })
    default:
      return state;
  }
};
