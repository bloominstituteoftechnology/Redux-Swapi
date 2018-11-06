import { FETCHING, SUCCESS, ERROR } from "../actions/index";

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return action.payload
    default:
      return state;
  }
};
