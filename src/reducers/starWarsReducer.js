import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  isloading: false,
  success: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        characters: [],
        isloading: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: true
      };
    case FAILURE:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: false
      };
    default:
      return state;
  }
};
