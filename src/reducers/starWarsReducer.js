import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
}  from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('inside reducer', state, action)
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
      }
      case FETCH_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
    default:
      return state;
  }
};
