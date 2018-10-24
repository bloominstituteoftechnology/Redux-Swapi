import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILURE } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.

  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case GET_CHARACTERS:
    return {
      ...state,
      fetching: true,
    }
    case GET_CHARACTERS_SUCCESS:
    return {
      ...state,
      fetching: false,
      characters: [
        ...state.characters,
        ...action.payload
      ]
    }
    case GET_CHARACTERS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    default:
      return state;
  }
};
