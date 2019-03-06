import { FETCHING, SUCCESS, ERROR } from "../actions/index";

const initialState = {
  characters: [],
  loading: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, loading: true}
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        loading: false,
        error: ''
      })
    case ERROR:
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
};
