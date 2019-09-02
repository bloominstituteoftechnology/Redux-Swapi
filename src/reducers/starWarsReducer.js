import { FETCHING, FAILURE, SUCCESS } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FAILURE:
      return Object.assign({}, state, { error: action.payload });
    case SUCCESS:
      return Object.assign({}, state, {
        error: "",
        fetching: false,
        characters: action.payload
      });
    default:
      return state;
  }
};
