import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: "",
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
    return {
      ...state,
      fetching: true,
      error: "",
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      fetching: false,
      error: "",
      characters: action.payload
      // ...characters, characters: payload.data.characters
    }
    case FETCH_FAIL:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    default:
      return state;
  }
};
